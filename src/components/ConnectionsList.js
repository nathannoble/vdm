import React, { Component } from 'react';
import $ from 'jquery';
// import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'ztree/css/metroStyle/metroStyle.css'
import 'jqueryui/jquery-ui.css'

window.jQuery = $;

require('ztree');
require('jqueryui');

const setting = {}

class ConnectionsList extends Component {

    componentDidMount(){
        let dataSources = this.props.dataSources;
        $(document).ready(function(){
            var zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, dataSources);
            zTreeObj.expandAll(false);

            $(".node_name").draggable({
				helper : 'clone',
				drag : function(event, ui) {
				},
				stop : function(event, ui) {
				},
				start : function(event, ui) {
					var nodeId = $(event)[0].currentTarget.id;
					nodeId = nodeId.substring(0, nodeId.length - 5);
					// globals.currentnode = zTreeObj.getNodeByParam('tId', nodeId);
					// zTreeObj.selectNode(globals.current);
				}
			});
         });
    }

    render (){
        return(
            <ul id="treeDemo" className="ztree"></ul>
        );
    }
}

export default ConnectionsList;

