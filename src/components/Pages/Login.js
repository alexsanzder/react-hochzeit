import React from 'react';
import { Route } from 'react-router-dom';

import SectionLogin from '../Sections/SectionLogin';

const Login = () => (
  <Route
    exact
    path="/"
    render={({ match }) => (
      <div>
        <SectionLogin />
      </div>
    )}
  />
);

export default Login;
