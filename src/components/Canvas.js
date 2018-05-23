import React, { Component } from 'react'
import $ from 'jquery';
require('jqueryui');
require('jsplumb');

const jsPlumb = window.jsPlumb;

class Canvas extends Component {

  

  componentDidMount(){
    // $('.canvas-item').resizable({
    //   resize : function(event, ui) {            
    //           jsPlumb.repaint(ui.helper);
    //       }
    //   });
    var common = {
      isSource:true,
      isTarget:true,
      connector:"Straight",
      endpoint:"Rectangle",
      paintStyle:{ fill:"white", outlineStroke:"blue", strokeWidth:3 },
      hoverPaintStyle:{ outlineStroke:"lightblue" },
      connectorStyle:{ outlineStroke:"green", strokeWidth:1 },
      connectorHoverStyle:{ strokeWidth:2 }
    };
    
    jsPlumb.bind('ready', function() {
      // jsPlumb.setContainer("canvas");
      
      
      
      jsPlumb.addEndpoint("item_left", { 
        anchor:"Right"
      }, common); 
      
      jsPlumb.addEndpoint("item_right", { 
        anchor:"Left"
      }, common);

      jsPlumb.addEndpoint("item_right", { 
        anchor:"Right" 
      }, common);

      jsPlumb.draggable("item_left");
      jsPlumb.draggable("item_right", { grid:[10,10] });
    });
  }

    render () {
      return (
        <div id='canvas'>
          <div id="item_left"  className="canvas-item">item one</div>
          <div id="item_right" className="canvas-item" >item two</div>
        </div>     
      )
    }
  }

  export default Canvas