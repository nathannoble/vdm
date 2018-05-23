import React, { Component } from 'react'
import ConnectionsList from '../components/ConnectionsList'
import Canvas from '../components/Canvas'
// eslint-disable-next-line
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix, Tabs, Tab } from 'react-bootstrap';

class Acquire extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          dataSources: []
        };
      }

    componentDidMount() {
        fetch("http://localhost:4000/api/datasources")  
        // fetch("http://52.45.154.215:9290/getConnections/name")
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
        const { error, isLoaded, dataSources } = this.state;
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
                                <div>
                                    <div className='col-lg-2  col-md-3 left-pane'>
                                        <ConnectionsList dataSources={dataSources} />
                                    </div>
                                    <div className='canvas col-lg-8 col-md-6'><Canvas/></div>
                                    <div className='col-lg-2  col-md-3 right-pane'>Explored Datasets</div>
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