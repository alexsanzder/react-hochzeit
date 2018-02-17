import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import Cryptr from 'cryptr';
import SectionLogin from '../Sections/SectionLogin';

export default class Login extends React.Component {
  static defaultProps = {
    location: '/',
    fakeAuth: { authenticate: false },
  };

  state = {
    redirectToReferrer: false,
    codeMatch: false,
  };

  handleCode = (e) => {
    const cryptr = new Cryptr('hash5');

    this.setState({
      codeMatch: cryptr.encrypt(e.target.value) === 'fb2568a3f5a6c8686b628e741bcb0869',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  };
  handleLogin = () => {
    this.props.fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: this.state.codeMatch,
      }));
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <SectionLogin
        handleLogin={this.handleLogin}
        handleCode={this.handleCode}
        handleKeyPress={this.handleKeyPress}
        codeMatch={this.state.codeMatch}
      />
    );
  }
}

Login.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fakeAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
