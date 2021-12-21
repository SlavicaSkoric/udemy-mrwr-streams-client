import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
//props passed from react-router-dom, because StreamEdit is used within a Route in App.js

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//ownProps - reference to our props object that shows inside of the StreamEdit component
//state - all the state from our Redux store
//we have the mapStateToProps because we want some initial values for our form

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
