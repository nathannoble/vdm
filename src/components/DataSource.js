import React, { Component } from 'react'

class DataSource extends Component {
    render () {
      return (
        <li>
          <span>{this.props.name}</span>
        </li>     
      )
    }
  }

  export default DataSource