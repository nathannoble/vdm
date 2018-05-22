import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'ztree/css/metroStyle/metroStyle.css'

window.jQuery = $;


require('ztree');

const nodes= [{
    name: 'Nkia',
    id:0,
    children: [{
        name: 'R&D',
        id:1
    },{
        name: 'Sales',
        id:2,
        children:[{
            name:'Global',
            id:3
        }]
    }]
},

{
    name: 'Hello',
    id:0,
    children: [{
        name: 'R&D',
        id:1
    },{
        name: 'Sales',
        id:2,
        children:[{
            name:'Global',
            id:3
        }]
    }]
}
];

const setting = {}

class ConnectionsList extends Component {

    componentDidMount(){
        $(document).ready(function(){
            var zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, nodes);
         });
    }

    render (){
        return(
            <ul id="treeDemo" class="ztree"></ul>
        );
    }
}

export default ConnectionsList;

