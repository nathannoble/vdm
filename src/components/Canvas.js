import React, { Component } from 'react'
import $ from 'jquery';
require('jqueryui');
require('jsplumb');

const jsPlumb = window.jsPlumb;

class Canvas extends Component {

  constructor(props){
    super(props)
  }
  

  componentDidMount(){
    let nodes = this.props.nodes;
    let plumb = this.props.plumb;
    plumb.setContainer('canvas');
        
    // plumb.bind('ready', function() {     
      
    // });
    
  }

    render () {
      return (
        <div id='canvas'>
        </div>     
      )
    }
  }

  export default Canvas