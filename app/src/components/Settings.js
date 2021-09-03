import React from 'react';
import TemplateForm from './TemplateForm';

class Settings extends React.Component {
  // fields for the form
  fields = [{ name: 'username', label: 'Username', type: 'text',
    description: 'This will be your username whenever you make a post on the app',
    onInput: this.onInput}];

  // function used when a value is typed into username field
  onInput (e) {
    localStorage.setItem('username', e.target.value);
    console.log(e.target.value);
  }

  // No validation needed, empty object returned by default
  validate(formValues) {
    return {};
  }

  render() {
    // Create the settings page with form
    return (
      <div className="app-content settings">
        <h1 className="title">Settings</h1>
        <hr/>
        <TemplateForm fields={this.fields} validate={this.validate}
          initialValues={{username: localStorage.getItem('username')}}
        />
      </div>
    );
  }
}

export default Settings;
