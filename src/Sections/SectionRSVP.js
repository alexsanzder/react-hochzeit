import React from 'react';

const SectionRSVP = () => (
  <section id="rsvp">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
          <div className="title-block">
            <h1>
              Are You{' '}
              <span>
                <em>Attending?</em>
              </span>
            </h1>
            <div className="divider" />
            <p>
              <em>
                Please select the events you are going to attend, and fill the following form with
                to confirm.
              </em>
            </p>
          </div>
        </div>
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center">
          <form id="ajaxForm" data-toggle="validator">
            <div className="row bot-mrg-20">
              <div className="col-md-4 text-center">
                <input type="checkbox" id="checkbox-1" name="events[]" value="Pre-Wedding Dinner" />
                <label htmlFor="checkbox-1" className="checkbox-button">
                  <i className="fa fa-circle-o" aria-hidden="true" /> Pre-Wedding Dinner
                </label>
                <p>
                  Victory Gardens Hall, 11 Grant Ave. Carteret NJ 9851 (732) 841-45 90, (732) 634-13
                  86 info@emailname.com
                </p>
              </div>
              <div className="col-md-4 text-center">
                <input type="checkbox" id="checkbox-2" name="events[]" value="Ceremony" />
                <label htmlFor="checkbox-2" className="checkbox-button">
                  <i className="fa fa-circle-o" aria-hidden="true" /> Ceremony
                </label>
                <p>
                  Victory Gardens Hall, 11 Grant Ave. Carteret NJ 9851 (732) 841-45 90, (732) 634-13
                  86 info@emailname.com
                </p>
              </div>
              <div className="col-md-4 text-center">
                <input type="checkbox" id="checkbox-3" name="events[]" value="Party" />
                <label htmlFor="checkbox-3" className="checkbox-button">
                  <i className="fa fa-circle-o" aria-hidden="true" /> Party
                </label>
                <p>
                  Victory Gardens Hall, 11 Grant Ave. Carteret NJ 9851 (732) 841-45 90, (732) 634-13
                  86 info@emailname.com
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    rows="5"
                    className="form-control"
                    name="message"
                    placeholder="Write your message...​"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
          </form>

          <button className="btn btn-primary btn-lg" id="ajaxFormSubmit">
            I´m Attending
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default SectionRSVP;
