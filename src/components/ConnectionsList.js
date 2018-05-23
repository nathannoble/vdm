import React, { Component } from 'react';
import $ from 'jquery';
// import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'ztree/css/metroStyle/metroStyle.css'

window.jQuery = $;


require('ztree');


const setting = {}

class ConnectionsList extends Component {

    componentDidMount(){
        let dataSources = this.props.dataSources;
        $(document).ready(function(){
            $.fn.zTree.init($("#treeDemo"), setting, dataSources);
         });
    }

    render (){
        return(
            <ul id="treeDemo" className="ztree"></ul>
        );
    }
}

export default ConnectionsList;

