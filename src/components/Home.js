import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Home extends Component {

    render() {
        return (
            <div>
                home
                <AddTodo />
                <VisibleTodoList />
            </div>
        );
    }
}

export default Home