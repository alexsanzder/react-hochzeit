import React from 'react';

import Header from '../organisms/Header';

import Home from '../organisms/Hero';
import Couple from '../organisms/Couple';
import Frase from '../organisms/Frase';
import TimeLine from '../organisms/TimeLine';
import Counter from '../organisms/Counter';
import Featured from '../organisms/Featured';
import Gifts from '../organisms/Gifts';
import RSVP from '../organisms/RSVP';

const HomePage = props => (
  <React.Fragment>
    <Home />
    <Header {...props} />
    <Couple />
    <Frase />
    <TimeLine />
    <Counter />
    <Featured />
    <Gifts />
    <RSVP />
  </React.Fragment>
);

export default HomePage;
