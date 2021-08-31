import React from 'react';
import TemplateForm from './TemplateForm';

class Upload extends React.Component {

  render() {
    return (
      <div className="app-content">
        <h1>Upload your Video</h1>
        <TemplateForm />
      </div>
    );
  }
}

export default Upload;
