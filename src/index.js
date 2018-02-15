import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';

import ScrollToTop from './components/ScrollToTop';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

// Global style
injectGlobal([
  `
body {
  color: #7b7571;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}

a {
  color: #c3a180;
}

h1,
h2,
h3,
h4,
h5,
h6, {
  font-family: "Oswald", Verdana, Geneva, sans-serif;
}
h1 span,
h2 span,
h3 span,
h4 span,
h5 span,
h6 span {
  color: #c3a180;
}

.title-block {
  margin: 0px auto 70px auto;
  text-align: center;
}
.title-block .divider {
  border-bottom: solid 2px #c3a180;
  width: 50px;
  margin: 20px auto;
}
.title-block h1 {
  font-size: 53px;
}
.title-block p {
  font-size: 18px;
}

.bg-gray-1 {
  background-color: #f4f4f4;
}
.bg-gray-2 {
  background-color: #eaeaea;
}
.bg-gray-3 {
  background-color: #cecece;
}
.bg-dark {
  background-color: #3d3d3d;
}
.bg-color-1 {
  background-color: #c3a180;
}
.txt-gray-1 {
  background-color: #f4f4f4;
}
.txt-gray-2 {
  background-color: #eaeaea;
}
.txt-gray-3 {
  background-color: #cecece;
}
.txt-dark {
  background-color: #3d3d3d;
}
.txt-color-1 {
  color: #c3a180;
}

.space10 {
  height: 10px;
}
.space20 {
  height: 20px;
}
.space30 {
  height: 30px;
}
.space40 {
  height: 40px;
}
.space50 {
  height: 50px;
}
.space60 {
  height: 60px;
}

.top-pad-10 {
  padding-top: 10px;
}
.top-pad-20 {
  padding-top: 20px;
}
.top-pad-30 {
  padding-top: 30px;
}
.top-pad-40 {
  padding-top: 40px;
}
.top-pad-50 {
  padding-top: 50px;
}
.top-pad-60 {
  padding-top: 60px;
}
.top-pad-70 {
  padding-top: 70px;
}
.top-pad-80 {
  padding-top: 80px;
}

.bot-pad-10 {
  padding-bottom: 10px;
}
.bot-pad-20 {
  padding-bottom: 20px;
}
.bot-pad-30 {
  padding-bottom: 30px;
}
.bot-pad-40 {
  padding-bottom: 40px;
}
.bot-pad-50 {
  padding-bottom: 50px;
}
.bot-pad-60 {
  padding-bottom: 60px;
}
.bot-pad-70 {
  padding-bottom: 70px;
}
.bot-pad-80 {
  padding-bottom: 80px;
}

.top-mrg-10 {
  margin-top: 10px;
}
.top-mrg-20 {
  margin-top: 20px;
}
.top-mrg-30 {
  margin-top: 30px;
}
.top-mrg-40 {
  margin-top: 40px;
}
.top-mrg-50 {
  margin-top: 50px;
}
.top-mrg-60 {
  margin-top: 60px;
}
.top-mrg-70 {
  margin-top: 70px;
}
.top-mrg-80 {
  margin-top: 80px;
}

.bot-mrg-10 {
  margin-bottom: 10px;
}
.bot-mrg-20 {
  margin-bottom: 20px;
}
.bot-mrg-30 {
  margin-bottom: 30px;
}
.bot-mrg-40 {
  margin-bottom: 40px;
}
.bot-mrg-50 {
  margin-bottom: 50px;
}
.bot-mrg-60 {
  margin-bottom: 60px;
}
.bot-mrg-70 {
  margin-bottom: 70px;
}
.bot-mrg-80 {
  margin-bottom: 80px;
}

.btn {
  border-radius: 3px;
}
.btn-primary,
.btn-primary.btn-bordered:focus,
.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:active,
.btn-primary.btn-bordered:active:focus,
.btn-primary.btn-bordered.active {
  background: #c3a180;
  border: solid 2px #c3a180;
  color: #fff;
}
.btn-primary:focus,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:active:focus,
.btn-primary.active,
.btn-primary.btn-bordered {
  background: none;
  border: solid 2px #c3a180;
  color: #c3a180;
}
`,
]);
