import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'

ReactDOM.render(
    <BrowserRouter>
    <div>
        <App />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        {/* <Route path="/acquire" component={Acquire} />
        <Route path="/explore" component={Explore} />
        <Route path="/govern" component={Govern} /> */}
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
