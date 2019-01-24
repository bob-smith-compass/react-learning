import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';
import Login from './components/login/Login';
import NameForm from './Form';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Carousel from './components/carousel/Carousel';
import Collapse from './components/collapse/Collapse';
import SplitButton from './components/split-button/SplitButton';
import Toast from './components/toast/Toast';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route 
              exact path="/" component={Home}>
            </Route>
            <Route 
              exact path="/about" component={About}>
            </Route>
          </Switch>
           </Router>
      </div>
    );
  }
}

export default App;
