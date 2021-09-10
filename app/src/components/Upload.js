import React from 'react';
import { connect } from 'react-redux';
import { uploadVideo } from '../actions';
import TemplateForm from './TemplateForm';

class Upload extends React.Component {

  // Required fields for upload form
  fields = [
    {name: 'title', label: 'Video Title', type:'text'},
    {name: 'description', label:'Description', type:'text'},
    {name: 'file', label:'File', type:'file'},
  ];

  onSubmit = (formValues) => {
    //console.log(formValues); // Log the form when the form is submitted
    this.props.uploadVideo(formValues); // send post request to upload video
  };

  // function that validates the form
  validate(formValues) {

    // Stores error messages
    const errors = {};

    // If the file field doesn't exist let them know to upload a file
    if (!formValues.file) {
      errors.file = "You must upload a video";
    } else {
      // Process the filename
      let filename = formValues.file.split('.');

      // Check if the file is a video file
      if (!(['webm', 'mp4'].includes(filename[filename.length-1]))) {
        errors.file = "You must upload a .mp4 or .webm video";
      }

    }

    // Notify user if field is empty
    if (!formValues.description) {
      errors.description = "You must enter a description";
    }

    return errors;

  }

  render() {
    // Form used to upload a video
    return (
      <div className="app-content">
        <h1>Upload your Video</h1>
        <TemplateForm validate={this.validate} fields={this.fields} onSubmit={this.onSubmit} button/>
      </div>
    );
  }
}

export default connect(null, { uploadVideo })(Upload);
