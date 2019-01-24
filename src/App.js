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
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Compass
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </header>
        <Breadcrumb />
        <Carousel />
        <Login />
        <Collapse />
        <SplitButton />
        <Toast />
        <Button />
        <Card />
        <NameForm />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
