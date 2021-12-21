import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  //our component gets rendered to the screen one time; then componentDidMount runs

  renderActions() {
    return (
      <>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </>
    );
  }
  //<React.Fragment></React.Fragment> - doesn't render anything to the DOM

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
