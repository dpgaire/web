import React, { Component } from 'react'
import { Map, GoogleApiWrapper  } from 'google-maps-react';
const mapStyles = {
    width: '90%',
    height: '85%',
    margin:'180',
    center:'mapcenter',
  };

export class Location extends Component {
    
    render() {
        return (
            <div >
            <Map className="maps" 
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 27.6733387, lng: 85.3355802}}
          
          
          />
            </div>
        )

    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA699wE4sgPIqECKQj50xdleihAVXTBgUI'
  })(Location);




