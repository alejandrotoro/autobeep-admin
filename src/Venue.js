import React from 'react'

const VenueContainer = React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.venueId}</h2>
      </div>
    )
  }
});

export default VenueContainer;