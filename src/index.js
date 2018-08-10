import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import Acquire from './containers/Acquire'
import Explore from './containers/Explore'
import Govern from './containers/Govern'
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

window.nodes = [];

ReactDOM.render(
    <Provider  store={store}>
        <BrowserRouter>
            <div>
                <App />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/acquire" render={(props) => (<Acquire {...props} state={window.nodes} />)} />
                <Route path="/explore" component={Explore} />
                <Route path="/govern" component={Govern} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
