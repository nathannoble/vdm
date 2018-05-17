import React, { Component } from 'react'

class Acquire extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <div className='sub-menu'>Acquire</div>
                <div>Acquire content</div>
            </div>
        );
    }
}

export default Acquire