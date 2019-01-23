import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NameForm from './Form';
import Breadcrumb from './components/breadcrumb/Breadcrumb';


class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Login />
        <NameForm />
      </div>
    );
  }
}

export default App;
