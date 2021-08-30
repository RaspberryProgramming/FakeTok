import React from "react";
import { Form, Field } from "react-final-form";

const TemplateForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="invalid">
          {error}
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {

    return (
      <div class={`form-group ${meta.error && meta.touched ? 'invalid' : ''}`}>
        <label>{label}</label>
        <input {...input} class="form-control"/>
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.file) {
          errors.file = "You must upload a video";
        } else {
          let filename = formValues.file.split('.');

          if (!(filename[filename.length-1] in ['webm', 'mp4'])) {
            errors.file = "You must upload a .mp4 or .webm video";
          }

        }

        if (!formValues.description) {
          errors.description = "You must enter a description";
        }

        return errors;
      }}

      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          <Field name="description" label="Description" component={renderInput}/>
          <Field name="file" label="File" type="file" component={renderInput}/>
          <button className="btn btn-primary">Submit</button>
        </form>
      )}
    />
  );
};

export default TemplateForm;
