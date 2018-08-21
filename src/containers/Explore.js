import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatasetList from '../components/DatasetList'
import TrifactaFrame from '../components/TrifactaFrame'
// eslint-disable-next-line
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix, Tabs, Tab } from 'react-bootstrap';


class Explore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            exploredDatasets: [],
            acquiredDatasets: []
        };

    }

    componentDidMount() {
        getAllData()
            .then(([exploredDatasets, acquiredDatasets]) => {
                this.setState({
                    isLoaded: true,
                    exploredDatasets: exploredDatasets,
                    acquiredDatasets: acquiredDatasets
                });
            })
    }

    render() {
        let {error, isLoaded, acquiredDatasets,exploredDatasets} = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='sub-menu'>
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                        <Tab className='tab-content' eventKey={1} title="Acquired Data">
                            <div>
                                <div className='col-lg-2  col-md-3 left-pane'>
                                    <DatasetList datasets={acquiredDatasets} title='Acquired Datasets' />
                                </div>
                                <TrifactaFrame />
                                <div className='col-lg-2  col-md-3 right-pane'>
                                    <DatasetList datasets={exploredDatasets} title='Explored Datasets' />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Rules Parser">
                            <div>
                                <div className='col-lg-2  col-md-3 left-pane'>
                                    <DatasetList datasets={window.DATASETS} title='Explored Datasets' />
                                </div>
                                <TrifactaFrame />
                                <div className='col-lg-2  col-md-3 right-pane'>
                                    <DatasetList datasets={window.DATASETS} title='Parsed Metadata' />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Another Tab" disabled>
                            Tab 3 content
                            </Tab>
                    </Tabs>
                </div>
    
            )
        }
        
    }
}

const getExploredDatasets = () => {
    return fetch('http://localhost:4000/api/exploredDatasets').then(res => res.json())
    .then((result) => JSON.parse(result))
};

const getAcquiredDatasets = () => {
    return fetch('http://localhost:4000/api/acquiredDatasets').then(res => res.json())
    .then((result) => JSON.parse(result))
};

const getAllData = () => {
    return Promise.all([getExploredDatasets(), getAcquiredDatasets()])
};

const mapStateToProps = state => {
    console.log(state);
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Explore)