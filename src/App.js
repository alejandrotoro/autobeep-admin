import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import NavLink from './NavLink'
import Login from './Login'

const App = (props) => {
  return (
    <div className="App">
      <div className="header">
        <h2 className="brand-name">Admins</h2>
        <ul role="nav" className="header-links">
          <li><Link to="/promos">Promos</Link></li>
          <li><Link to="/venues">Lugares</Link></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
      </div>
      {props.children || <Login/>}
    </div>
  );
}

export default App;