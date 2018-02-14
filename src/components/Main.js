import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Gallery from './Pages/Gallery';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </main>
);
export default Main;
