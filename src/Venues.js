import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Mis Lugares</h2>
        <ul>
          <li><Link to="/venues/1">Lugar 1</Link></li>
          <li><Link to="/venues/2">Lugar 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})