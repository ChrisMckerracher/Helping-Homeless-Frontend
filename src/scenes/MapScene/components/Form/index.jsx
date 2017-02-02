import ui from 'redux-ui'
import React, {Component} from 'react'
import { Field,} from 'redux-form'
import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle,
    TimePicker
} from 'redux-form-material-ui'
import Paper from 'material-ui/Paper'

require("styles.scss")

@ui()
export class FormContainer extends Component {
    render() {
        return (
            <div className="form-container">
                <MyForm />
            </div>
        )
    }
}

@ui()
class MyForm extends Component {
    
    render() {
        return (
            <form >
                <Paper className="form-inner" zDepth={1}>
                    <Field name="name" component={TextField} fullWidth={true}
                      floatingLabelFixed={true} floatingLabelText="Your Name*"
                      format={null} hintText="Name" />
                    <Field name="time" component={TimePicker} fullWidth={true}
                      floatingLabelFixed={true}
                      floatingLabelText="Time of Event"
                      format = {null}  defaultTime = {new Date()} />
                    <Field name="direction" component={SelectField}
                      fullWidth={true} hintText="Direction person was moving"
                      floatingLabelFixed={true}
                      floatingLabelText="Direction person was moving" >
                        <MenuItem value="none" primaryText="Stationary" />
                        <MenuItem value="north" primaryText="North" />
                        <MenuItem value="east" primaryText="East" />
                        <MenuItem value="south" primaryText="South" />
                        <MenuItem value="west" primaryText="West" />
                    </Field>
                    <Field className="description-text" name="description"
                      component={TextField} floatingLabelFixed={true}
                      floatingLabelText="Description of person"
                      hintText="Please give a description of the person"
                      fullWidth={true} multiLine={true} />
                </Paper>
            </form>
        )
    }
}

MyForm = reduxForm({
    form: 'myForm'
})(MyForm);