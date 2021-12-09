import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '202914207657-7k2lnc8umjvebotmn8eb3u71e7h9vfls.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  //gapi - a variable available on windows scope inside of our browser
  //callback (2nd argument) will be called only after 'client:auth2' library has been successfully loaded up into gapi (this loading process takes some time) (this library has a ton of different functions assigned to it that we can use to essentially manipulate the user's authentication status)
  //the .init code only initializes the library, it doesn't take the user to/through the oauth process (happens on .then)
  //gapi library holds your login status in between refreshes of the page

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  //arrow function binds the content to our component

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  //helper methods help describe what is going on inside of the component, easier to read to other developers
  //communicate better to other engineers who might at some time be working on our project

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
