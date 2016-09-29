import React from 'react'
import Provider from 'react-redux'
import store from './store'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import VenuesContainer from './VenuesContainer'
import Venue from './Venue'
import Login from './Login'

module.exports = (
  <Provider store={store}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/venues" component={VenuesContainer}>
        <Route path="/venues/:venueId" component={Venue}/>
      </Route>
    </Route>
  </Provider>
)