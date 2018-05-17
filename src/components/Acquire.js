import React, { Component } from 'react'

class Acquire extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h1>Acquire</h1>
            </div>
        );
    }
}

export default Acquire