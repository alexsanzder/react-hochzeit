import React from 'react';
import { Redirect } from 'react-router-dom';

import SectionLogin from '../Sections/SectionLogin';

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    this.props.fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return <SectionLogin login={this.login} />;
  }
}

export default Login;
