import React from 'react';
import { Field, reduxForm } from 'redux-form';
//Field - component (to show on screen)
//reduxForm - function (very similar to connect function)

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  //renderInput(formProps) {
  //console.log(formProps);
  /*     return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    ); */
  //return <input {...formProps.input} />;
  //we need this syntax to get all the props of the redux-form input object
  //}
  renderInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  };
  //Arrow functions don't bind the value of this, so they just use lexical scope. The value of this remains whatever it was at the time when the arrow function was defined.

  render() {
    //console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}
//name - name of the property that this field is going to manage
//component - the element that we are going to show on the screen
//redux-form - only automates the redux cycle for us, we are responsible for feeding it the real form, inputs etc

//validation
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    //only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
//'streamForm' - name of the form, describing the purpose of the form
