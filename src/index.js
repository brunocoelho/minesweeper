import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/about';
import App from './components/app';
import './assets/css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('root'));
