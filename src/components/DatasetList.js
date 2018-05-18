import React, { Component } from 'react'
import Dataset from '../components/Dataset'

class DatasetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasets: DATASETS
        };
    }
    

    filterChanged = (e) => {
        var updatedList = DATASETS;
        updatedList = updatedList.filter(function(item){
        return item.name.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            datasets: updatedList
        })
      }

    render () {
    let contacts = this.state.datasets;
    return (
        <div className="holder">
        <input type="text" className="search" onChange={this.filterChanged}/>
        <div>Datasets</div>
        <ul>
            {
                contacts.map((el) => {
                return <Dataset key={el.id}
                                name={el.name}
                        /> 
                })
            }          
        </ul>
        </div>     
    )
    }
}

export default DatasetList


let DATASETS = [
    {
      id: 1,
      name: 'Product'
    },
    {
      id: 2,
      name: 'Inventory'
    },
    {
      id: 3,
      name: 'Receipts'
    },
    {
      id: 4,
      name: 'Receipt Items'
    },
    {
      id: 5,
      name: 'Invoices'
    }
  ]