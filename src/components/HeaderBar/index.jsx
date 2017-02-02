import React, {Component} from 'react'
import ui from 'redux-ui'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

@ui()
export class TabBar extends Component {
    
    render() {
        return (
          <Tabs>
            <Tab icon={
                <FontIcon className="muidocs-icon-action-home">
                    map
                </FontIcon>} />
            <Tab icon={
                <FontIcon className="material-icons">
                    recent sitings
                </FontIcon>} />
            <Tab icon={
                <FontIcon className="material-icons">
                    about
                </FontIcon>} />
          </Tabs>
        );
    }
}