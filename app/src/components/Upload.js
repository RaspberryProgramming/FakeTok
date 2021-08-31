import React from 'react';
import TemplateForm from './TemplateForm';

class Upload extends React.Component {

  fields = [
    {name: 'description', label:'Description', type:'text'},
    {name: 'file', label:'File', type:'file'},
  ];

  validate(formValues) {

    const errors = {};

    if (!formValues.file) {
      errors.file = "You must upload a video";
    } else {
      let filename = formValues.file.split('.');

      if (!(['webm', 'mp4'].includes(filename[filename.length-1]))) {
        errors.file = "You must upload a .mp4 or .webm video";
      }

    }

    if (!formValues.description) {
      errors.description = "You must enter a description";
    }

    return errors;

  }

  render() {
    return (
      <div className="app-content">
        <h1>Upload your Video</h1>
        <TemplateForm validate={this.validate} fields={this.fields} button/>
      </div>
    );
  }
}

export default Upload;
