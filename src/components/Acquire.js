import React, { Component } from 'react'
import ConnectionsList from '../components/ConnectionsList'
import Canvas from '../components/Canvas'
// eslint-disable-next-line
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix, Tabs, Tab } from 'react-bootstrap';

import $ from 'jquery';
require('jqueryui');
require('jsplumb');

const jsPlumb = window.jsPlumb;
const jsPlumbUtil = window.jsPlumbUtil;

class Acquire extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          dataSources: [],
          zTreeObj: null,
          currentNode: null,
          plumb: null
        };
      }

    

    addNode(node, nodeKey, relX, relY, plumb){

        //
        // initialise element as connection targets and source.
        //
        var initNode = function(el) {
        
            // initialise draggable elements.
            plumb.draggable(el);
    
            plumb.makeSource(el, {
                filter: ".ep",
                anchor: "Continuous",
                connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
                connectionType:"basic",
                extract:{
                    "action":"the-action"
                },
                maxConnections: 2,
                onMaxConnections: function (info, e) {
                    alert("Maximum connections (" + info.maxConnections + ") reached");
                }
            });
    
            plumb.makeTarget(el, {
                dropOptions: { hoverClass: "dragHover" },
                anchor: "Continuous",
                allowLoopback: true
            });
    
        };
    
        var newNode = function(x, y) {
            var vOffset = 100;
            var hOffset = 300;
            var d = document.createElement("div");
            var id = jsPlumbUtil.uuid();
            var nodeName = node.name;
		    if (nodeName.length > 7){nodeName = nodeName.substring(0, 7) + '...';}
            d.className = "w";
            d.id = id;
            d.innerHTML = nodeName + "<div class=\"ep\"></div>";
            d.style.left = (x + hOffset) + "px";
            d.style.top = (y + vOffset) + "px";
            plumb.getContainer().appendChild(d);
            initNode(d);
            return d;
        };

        console.log('Nodekey: ' + nodeKey);

        newNode(relX, relY);

        // var el = document.createElement("div", {id: id});
        
		
		// el.className = "w";
		// el.id = id;
		// el.style.height = '80px';
		// el.style.width = '225px';
        // el.style.padding = '5px';
        
        // var _name_ = node.name;
		// if (_name_.length > 17){_name_ = _name_.substring(0, 17) + '...';}
            
        // el.innerHTML = '<div>' + _name_ + '</div>'  
        
        // el.style.left = relX + "px";
        // el.style.top = relY + "px";

        // plumb.getContainer().appendChild(el);

    }

    componentDidMount() {

        // Create an instance of jsplumb for this canvas
        let plumb = jsPlumb.getInstance({
            Endpoint: ["Dot", {radius: 2}],
            Connector:"StateMachine",
            HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2 },
            ConnectionOverlays: [
                [ "Arrow", {
                    location: 1,
                    id: "arrow",
                    length: 14,
                    foldback: 0.8
                } ],
                [ "Label", { label: "FOO", id: "label", cssClass: "aLabel" }]
            ],
            Container: "canvas"
        });

        plumb.registerConnectionType("basic", { anchor:"Continuous", connector:"StateMachine" });

        var canvas = document.getElementById("canvas");
    
        // bind a click listener to each connection; the connection is deleted. you could of course
        // just do this: instance.bind("click", instance.deleteConnection), but I wanted to make it clear what was
        // happening.
        plumb.bind("click", function (c) {
            plumb.deleteConnection(c);
        });
    
        // bind a connection listener. note that the parameter passed to this function contains more than
        // just the new connection - see the documentation for a full list of what is included in 'info'.
        // this listener sets the connection's internal
        // id as the label overlay's text.
        plumb.bind("connection", function (info) {
            info.connection.getOverlay("label").setLabel(info.connection.id);
        });

        this.setState({plumb: plumb});

          

        fetch('http://localhost:4000/api/getconnections')
        // fetch("http://localhost:4000/api/datasources")  
        // fetch("http://52.45.154.215:9290/getConnections/name")
        // fetch('http://52.45.154.215:9290/getNewConnections/name')
          .then(res => res.json())
          .then(
              
            (result) => {
              this.setState({
                isLoaded: true,
                dataSources: JSON.parse(result)
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      

    render() {
        const { error, isLoaded, dataSources, zTreeObj, currentNode, canvasNodes, plumb } = this.state;
        const addNode = this.addNode;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div className='sub-menu'>
                        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                            <Tab className='tab-content' eventKey={1} title="RCG Enable">

                            <div className="main">
                                <div className="col-1">
                                <ConnectionsList dataSources={dataSources} zTreeObj={zTreeObj} 
                                        currentNode = {currentNode} addNode={addNode}  plumb={plumb}/>  
                                </div>
                                <div className="col-2">
                                <Canvas nodes={canvasNodes} plumb={plumb}/>
                                </div>
                                <div className="col-3">Explored Datasets</div>
                            </div>

                            </Tab>
                            <Tab eventKey={2} title="Confluent" disabled>
                                Rules Parser content
                                </Tab>
                        </Tabs>
                    </div>
                </div>
            );
        }
        
    }

}

export default Acquire