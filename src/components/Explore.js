import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix, Tabs, Tab } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class Explore extends Component {

    render() {
        console.log(this.props.match)
        return (
            <div>
                <div className='sub-menu'>
                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                    <Tab className='tab-content' eventKey={1} title="Acquire Data">
                        Acquire Data content
                    </Tab>
                    <Tab eventKey={2} title="Rules Parser">
                    Rules Parser content
                    </Tab>
                    <Tab eventKey={3} title="Another Tab" disabled>
                        Tab 3 content
                    </Tab>
                </Tabs>
                </div>
                
            </div>
        );
    }
}



export default Explore