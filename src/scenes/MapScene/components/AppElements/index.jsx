import ui from 'redux-ui'
import React, {Component} from 'react'

require("styles.scss")

@ui()
export class AppElements extends Component {
    
    render() {
        return (
            <div className="app-elements">
                <Map />
                <FormContainer />
            </div>
        );
    }
}