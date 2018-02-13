import React from 'react';

const Footer = () => (
  <section id="footer" className="img-bg-5" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
          <h1>Thank You!</h1>
          <ul className="names">
            <li>Padme</li>
            <li className="circle">&amp;</li>
            <li>Anakin</li>
          </ul>
          <div className="copyright">
            All Rights Reserved © 2018 | Design:{' '}
            <a href="http://weetsi.com" target="_blank" rel="noopener noreferrer">
              Alejandro Sánchez
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
