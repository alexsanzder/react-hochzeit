import React from 'react';

import styled from 'styled-components';

import { Grid, Row, Col, Checkbox } from 'react-bootstrap';

/* 
#ajaxForm input[type="checkbox"] {
  display: none;
}
#ajaxForm label.checkbox-button {
  font-family: "Oswald", Verdana, Geneva, sans-serif;
  font-size: 23px;
  cursor: pointer;
  font-weight: normal;
}
#ajaxForm label.checkbox-button:hover {
  color: #c3a180;
}
#ajaxForm input[type="checkbox"]:checked + label.checkbox-button {
  color: #c3a180;
}
input[type="checkbox"]:checked + label.checkbox-button i.fa::before {
  content: "\f058";
}
 */

const Toggle = styled(Checkbox)`
  label {
    font-family: 'Oswald', Verdana, Geneva, sans-serif;
    font-size: 23px;
    cursor: pointer;
    font-weight: normal;
    &:hover {
      color: #c3a180;
    }
    &::before {
      letter-spacing: 10px;
      display: none;
      font-family: 'Font Awesome 5 Solid';
      content: '\f204';
    }
    .svg-inline--fa {
      margin-right: 0.3em;
    }
  }
  input {
    &:checked + label {
      color: #c3a180;
      &::before {
        display: none;
        font-family: 'Font Awesome 5 Solid';
        color: red;
        font-size: 100px;
        content: '\f205';
      }
    }
  }
`;
const Label = styled.label`
  font-family: 'Oswald', Verdana, Geneva, sans-serif;
  font-size: 23px;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    color: #c3a180;
  }
  &::before {
    letter-spacing: 10px;
    display: none;
    font-family: 'Font Awesome 5 Solid';
    content: '\f204';
  }
  .svg-inline--fa {
    margin-right: 0.3em;
  }
`;

const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    color: #c3a180;
    &::before {
      display: none;
      font-family: 'Font Awesome 5 Solid';
      color: red;
      font-size: 100px;
      content: '\f205';
    }
  }
`;

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
                <Input type="checkbox" id="checkbox-1" name="events[]" value="Pre-Wedding Dinner" />
                <Label htmlFor="checkbox-1">Pre-Wedding Dinner</Label>
                <p>
                  Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <Toggle title="Ceremony">Ceremony</Toggle>

                <p>
                  Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <Input type="checkbox" id="checkbox-3" name="events[]" value="Party" />
                <Label htmlFor="checkbox-3">Party</Label>
                <p>
                  Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
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
