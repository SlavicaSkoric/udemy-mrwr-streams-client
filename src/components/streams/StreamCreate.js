import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.createStream(formValues);
  };
  //Arrow functions don't bind the value of this, so they just use lexical scope. The value of this remains whatever it was at the time when the arrow function was defined.

  render() {
    //console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
