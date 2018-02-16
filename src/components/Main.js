import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (fakeAuth.isAuthenticated === true ? (
        <Component fakeAuth={fakeAuth} {...props} />
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
  <React.Fragment>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />

      <PrivateRoute path="/wedding" component={Gallery} />
      <Route path="/login" render={props => <Login fakeAuth={fakeAuth} {...props} />} />
      <Route
        render={() => (
          <React.Fragment>
            <Header />
            <h1>Page Not Found</h1>
            <Footer />
          </React.Fragment>
        )}
      />
    </Switch>
  </React.Fragment>
);
export default Main;
