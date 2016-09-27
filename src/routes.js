import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Register from './Register'
import Venues from './Venues'
import Venue from './Venue'
import Login from './Login'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/venues" component={Venues}>
      <Route path="/venues/:venueId" component={Venue}/>
    </Route>
  </Route>
)