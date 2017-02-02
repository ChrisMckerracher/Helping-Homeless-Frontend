import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ui from 'redux-ui'
import React, {Component} from 'react'

require('styles.scss')

var _ = require("underscore")
var markers = [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }]

{/* Starter code from React Google Maps */}
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick} >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

@ui()
export class Map extends Component {
    
    render() {
        return(
            <div className="map-style">
              <GettingStartedGoogleMap
                containerElement={
                  <div style={{ height: `100%` }} />
                }
                mapElement={
                  <div style={{ height: `100%` }} />
                }
                onMapLoad={_.noop}
                onMapClick={_.noop}
                markers={markers}
                onMarkerRightClick={_.noop}  />
            </div>
        )
       
    }
}