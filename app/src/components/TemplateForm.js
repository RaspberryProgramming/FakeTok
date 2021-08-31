import React from "react";
import { Form, Field } from "react-final-form";

const TemplateForm = (props) => {
  /*
  TemplateForm requires that fields prop and validate prop are passed.
    fields must be an array containing objects. Each object must have a name,
    label, and type value. Each of these pertain to field. The validate prop
    should be a function for react-final-form Form.
  */

  const renderError = ({ error, submitFailed }) => {
    if (submitFailed && error) {
      return (
        <div className="invalid">
          {error}
        </div>
      );
    }
  };

  const renderInput = ({ input, label, onInput, description, meta }) => {

    return (
      <div className={`form-group ${meta.submitFailed && meta.error ? 'invalid' : ''}`}>
        <label>{label}</label>
        <input {...input} onInput={onInput} className="form-control"/>
        <small>{description}</small>
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  console.log(props);

  const fields = props.fields.map(f => {
    return <Field key={f.name} name={f.name} label={f.label} type={f.type}
            description={f.description} onInput={f.onInput}
            component={renderInput}/>;
  });

  return (
    <Form
      onSubmit={onSubmit}
      validate={props.validate}
      initialValues={props.initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          {fields}
          <button className={`btn btn-primary ${props.button ? 'd-block' : 'd-none'}`}>
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default TemplateForm;
