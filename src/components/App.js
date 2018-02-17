import React from 'react';
import Helmet from 'react-helmet';

import FullScreenLoaidng from './FullScreenLoaidng';
import Main from './Main';

import globalStyles from './global-styles';
import favicon from '../favicon.svg';

globalStyles();

const App = () => (
  <React.Fragment>
    <Helmet>
      <title>You Are Doing Great</title>
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <FullScreenLoaidng />
    <Main />
  </React.Fragment>
);
export default App;
