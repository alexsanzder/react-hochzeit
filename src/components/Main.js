import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
export default Main;
