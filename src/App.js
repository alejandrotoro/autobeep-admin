import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import NavLink from './NavLink'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Admins</h2>
        </div>
        <ul role="nav">
          <li><Link to="/register">Registro</Link></li>
          <li><Link to="/venues">Lugares</Link></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children || <Login/>}
      </div>
    );
  }
}

export default App;