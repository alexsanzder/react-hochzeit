import React from 'react';
import Helmet from 'react-helmet';

import FullScreenLoaidng from './FullScreenLoaidng';
import Main from './Main';
import Footer from './Footer';

import globalStyles from './global-styles';

globalStyles();

const App = () => (
  <div>
    <Helmet title="You Are Doing Great" />

    <FullScreenLoaidng />
    <Main />
    <Footer />
  </div>
);
export default App;
