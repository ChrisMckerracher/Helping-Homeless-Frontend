import ui from 'redux-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { PropTypes } from 'react'

require("styles.scss")


@ui({
    key: "ui_data",
    ui_state: {
        dropdown:{
            position: {
                lat: "",
                lng: ""
            },
            id: "",
        },
        highlighted_tab: "",
    },
})
export class MapScene extends Component {

    static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }
    
    render() {
        return (
            <div className="map-screen">
                <TabBar />
                <AppElements />
            </div>
        );
    }
};