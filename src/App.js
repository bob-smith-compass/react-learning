import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import Login from './components/Login';
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import {Link} from 'react-router-dom';
import Notfound from "./components/pages/Notfound";
import Test from "./components/test/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Compass</p>
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

        <div className="footer mb-2">
          <a href="/">Home</a> | <a href="/about">About</a>
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/test" component={Test} />
            <Route component={Notfound} />
            <Link to="/">Home</Link> | <Link to="/about:id">About</Link>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
