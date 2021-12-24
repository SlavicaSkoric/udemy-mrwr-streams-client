import React from 'react';
import { Form, Field } from 'react-final-form';

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    //console.log(formValues);
    props.onSubmit(formValues);
  };
  //Arrow functions don't bind the value of this, so they just use lexical scope. The value of this remains whatever it was at the time when the arrow function was defined.

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = 'You must enter a title';
        }

        if (!formValues.description) {
          errors.description = 'You must enter a description';
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='ui form error'>
          <Field name='title' component={renderInput} label='Enter Title' />
          <Field
            name='description'
            component={renderInput}
            label='Enter Description'
          />
          <button className='ui button primary'>Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;
//name - name of the property that this field is going to manage
//component - the element that we are going to show on the screen
