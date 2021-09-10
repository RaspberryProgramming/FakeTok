import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions';
import TemplateForm from './TemplateForm';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    // fields for the form
    this.fields = [{ name: 'username', label: 'Username', type: 'text',
    description: 'This will be your username whenever you make a post on the app',
    onInput: this.onInput}];
  }

  onInput = (e) => { // function used when a value is typed into username field
    console.log(e.target.value);
    this.props.setUsername(e.target.value);
  }

  // No validation needed, empty object returned by default
  validate(formValues) {
    return {};
  }
  
  shouldComponentUpdate(nextProps) {
    /** 
     * Prevent rerender when username is updated
     * 
     * By default, whenever the TemplateForm username field is updated, the component would update.
     * this will prevent the component from updating and losing focus from the input whenever there is a keypress
    */

    if(nextProps.username !== this.props.username && this.props.username !== undefined) {
      return false;
    }

    return true;
  }

  render() {    // Create the settings page with form
    return (
      <div className="app-content settings">
        <h1 className="title">Settings</h1>
        <hr/>
        <TemplateForm 
          fields={this.fields} validate={this.validate}
          initialValues={{username: this.props.username}}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.account.username,
  };
};

export default connect(mapStateToProps, { setUsername })(Settings);
