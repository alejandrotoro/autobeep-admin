import { connect } from 'react-redux'
import { editVenue } from './actions'
import VenueList from './VenueList'

import axios from 'axios'
import { browserHistory } from 'react-router'

import constants from './ComponentConstants'

const getVenues = (venues, filter) => {
  const api_rul = constants.API.API_URL;
  const token = constants.AUTH.token;

  axios.get( api_rul + 'admin-venues', 
  {
    token: token
  })
  .then(function (data) {
    constants.AUTH.token = data.data.access_token;
    browserHistory.push('/venues');
  })
  .catch(function (error) {
    console.log(error);
    browserHistory.push('/');
  });
}

const mapStateToProps = (state) => {
  return {
    venues: getVenues(state.venues, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (id) => {
      dispatch(editVenue(id))
    }
  }
}

const VenuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueList)

export default VenuesContainer