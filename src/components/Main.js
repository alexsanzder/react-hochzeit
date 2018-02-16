import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/wedding" render={({ match }) => <h1>{match.url}</h1>} />
      <Route
        path="/gallery"
        render={({ match }) => (
          <React.Fragment>
            <Header />
            <Gallery />
            <Footer />
          </React.Fragment>
        )}
      />
      <Route
        path="/rsvp"
        render={() => (
          <React.Fragment>
            <Header />
            <Contact />
            <Footer />
          </React.Fragment>
        )}
      />
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
  </main>
);
export default Main;
