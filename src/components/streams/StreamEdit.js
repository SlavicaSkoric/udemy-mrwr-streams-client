import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //console.log(this.props);
    return <div>{this.props.stream.title}</div>;
  }
}
//props passed from react-router-dom, because StreamEdit is used within a Route in App.js

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//ownProps - reference to our props object that shows inside of the StreamEdit component
//state - all the state from our Redux store

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
