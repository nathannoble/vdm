import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import Acquire from './containers/Acquire'
import Explore from './containers/Explore'
import Govern from './containers/Govern'
import Operationalize from './containers/Operationalize'
import Monitor from './containers/Monitor'
import About from './containers/About'
import './index.css'
import './component.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

window.nodes = [];

window.DATASETS = [
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

ReactDOM.render(
    <Provider  store={store}>
        <BrowserRouter>
            <div>
                <App />
                <Route exact path="/" component={Acquire} />
                <Route path="/acquire" render={(props) => (<Acquire {...props} state={window.nodes} />)} />
                <Route path="/explore" component={Explore} />
                <Route path="/govern" component={Govern} />
                <Route path="/operationalize" component={Operationalize} />
                <Route path="/monitor" component={Monitor} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
