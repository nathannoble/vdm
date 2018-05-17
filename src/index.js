import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Acquire from './components/Acquire'
import Explore from './components/Explore'
import Govern from './components/Govern'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

ReactDOM.render(
    <BrowserRouter>
    <div>
        <App />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/acquire" component={Acquire} />
        <Route path="/explore" component={Explore} />
        <Route path="/govern" component={Govern} />
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
