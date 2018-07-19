import React, { Component } from 'react'
import { connect } from 'react-redux'
// import $ from 'jquery';
require('jqueryui');
require('jsplumb');

const jsPlumb = window.jsPlumb;

class Canvas extends Component {

  componentDidMount() {
    let nodes = this.props.nodes;
    let plumb = this.props.plumb;
    let addNode = this.props.addNode;
    let nodeClicked = this.props.nodeClicked;

    plumb.setContainer('canvas');
    jsPlumb.ready(function () {
      console.log('Plumb ready!')

      plumb.batch(function () {
        // Restore nodes
        nodes.forEach(node => {
          addNode(node, node.nodeKey, node.relX, node.relY, plumb, nodeClicked, false)
        });

        if (window.nodes.length > 1) {
          plumb.connect({ source: nodes[0].id, target: window.nodes[1].id, type: "basic" });
        }
        
      });
      

      

    });

  }

  render() {
    return (
      <div id='canvas'>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nodes: state.nodes
})

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)