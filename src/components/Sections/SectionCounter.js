import React from 'react';

const SectionCounter = () => (
  <section id="counter" className="img-bg-3" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center">
          <h2>Counting the minutes for the big day!</h2>

          <div className="countdown" data-date="2018-08-23 00:00:00" />
        </div>
      </div>
    </div>
  </section>
);

export default SectionCounter;
