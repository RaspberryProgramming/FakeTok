import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import posts from "../apis/posts";
import Dropzone, {useDropzone} from 'react-dropzone';
import axios from 'axios';

const Upload = (props) => {
  let errors = {};

  let submitFailed = false;

  const onDrop = useCallback(acceptedFiles => {
    console.log('Recieved File');
  }, []);

  const renderError = (field) => {
    return (
      <div className={errors[field] ? 'invalid': ''}>
        {errors[field] ? errors[field]: ''}
      </div>
      );
  }

  const validate = ({title, description, file}) => {
    let valid = true;

    if (!title) {
      errors.title = "Please pass a title for your video.";
      valid = false;
    } else if (errors.title) {
      delete errors.title;
    }

    if (!description) {
      errors.description = "Please type a description for your video.";
      valid = false;
    } else if (errors.description) {
      delete errors.description;
    }

    
    if (!file) {
      errors.file = "Please upload a video.";
      valid = false;
    } else{
      // Process the filename
      let filename = file.name.split('.');

      // Check if the file is a video file
      if (!(['webm', 'mp4'].includes(filename[filename.length-1]))) {
        errors.file = "You must upload a mp4 or webm video";
        valid = false;
      } else if (errors.description) {
        delete errors.description;
      }
    }

    return valid;
  }

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles: 1})

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();


    let values = {title: e.target.title.value, description: e.target.description.value, file: acceptedFiles[0]};
    console.log(values);

    if(validate(values)) {
      console.log(values);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('file', values.file);
      formData.append('uploader', props.username);
      posts.post('/upload', formData, {headers: {
        'content-type': 'multipart/form-data'
      }});
    } else {
      submitFailed = true;
    }

  };

  // Return the form with all processed fields
  return (
    <div className="app-content">
      <form onSubmit={onSubmit} className="form">
        <div
          className={
            `form-group${submitFailed && errors.title ? 'invalid' : ''}`
          }>
          <label>Title</label>
          <input name="title"></input>
          {renderError('title')}
        </div>

        <div
          className={
            `form-group ${submitFailed && errors.description ? 'invalid' : ''}`
          }>
          <label>Description</label>
          <input name="description"></input>
          {renderError('description')}
        </div>

        <div {...getRootProps()} className="d-flex flex-column align-items-center">
          <input name="file" {...getInputProps()} />
          <i className="bi bi-file-arrow-up fz-128" />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
          {renderError('file')}
        </div>
        <button className='btn btn-primary'>
            Submit
        </button>
      </form>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    username: state.account.username,
  };
};

export default connect(mapStateToProps, {})(Upload);
