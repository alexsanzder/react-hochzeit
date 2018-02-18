import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import cookie from 'react-cookies';

import Header from './Header';
import Footer from './Footer';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';

const fakeAuth = {
  isAuthenticated: cookie.load('remember'),
  authenticate(remember, cb) {
    this.isAuthenticated = true;
    if (remember) {
      cookie.save('remember', 1);
    }
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    cookie.remove('remember');
    setTimeout(cb, 100); // fake async
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (fakeAuth.isAuthenticated ? (
        <React.Fragment>
          {props.match.path !== '/' ? <Header fakeAuth={fakeAuth} /> : null}
          <Component fakeAuth={fakeAuth} {...props} />
          <Footer />
        </React.Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

const Main = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute path="/gallery" component={Gallery} />
    <Route exact path="/login" render={props => <Login fakeAuth={fakeAuth} {...props} />} />

    <Route
      render={() => (
        <React.Fragment>
          <h1>Page Not Found</h1>
        </React.Fragment>
      )}
    />
  </Switch>
);

PrivateRoute.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  component: PropTypes.func.isRequired,
};
PrivateRoute.defaultProps = {
  match: {},
  location: {},
};

export default Main;
