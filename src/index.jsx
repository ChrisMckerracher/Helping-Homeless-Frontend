import  { reducer as formReducer } from 'redux-form'
import {render} from 'react-dom';
import {reducer as uiReducer} from 'redux-ui'
import {combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

var store = createStore(combineReducers({ui:uiReducer, form:formReducer}))

render(<Provider store={store}>
            <MapScene />
        </Provider>
, document.getElementById('app'))