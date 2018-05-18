import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DatasetList from '../components/DatasetList'
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
                        <div>
                            <DatasetList/>
                        </div>
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


let CONTACTS = [
    {
      id: 1,
      name: 'Natarajah',
      phoneNumber: '0938073320',
      image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
    },
    {
      id: 2,
      name: 'Krot',
      phoneNumber: '0945565655',
      image: 'http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png'
      
    },
    {
      id: 3,
      name: 'Mandala',
      phoneNumber: '0975149873',
      image: 'http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg'
    },
    {
      id: 4,
      name: 'Shiva',
      phoneNumber: '0638546385',
      image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
    },
    {
      id: 5,
      name: 'Ashvattha',
      phoneNumber: '0506549879',
      image: 'http://supertalk.superfuture.com/uploads/profile/photo-thumb-142296.jpg?_r=1424512169'
    }
  ]