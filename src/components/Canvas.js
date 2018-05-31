import React, { Component } from 'react'
// import $ from 'jquery';
require('jqueryui');
require('jsplumb');

const jsPlumb = window.jsPlumb;

class Canvas extends Component {

  componentDidMount() {
    let plumb = this.props.plumb;
    plumb.setContainer('canvas');

    jsPlumb.ready(function () {
      console.log('Plumb ready!')
    });

  }

  render() {
    return (
      <div id='canvas'>
      </div>
    )
  }
}

export default Canvas