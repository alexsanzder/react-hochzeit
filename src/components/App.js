import React from 'react';

import FullScreenLoaidng from './FullScreenLoaidng';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <FullScreenLoaidng />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
