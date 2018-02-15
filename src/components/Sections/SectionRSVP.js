import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

const Form = styled.form`
  input,
  textarea {
    border: 2px solid #b6b7b7;
    color: #363b3f;
    background: transparent none repeat scroll 0% 0%;
    padding: 15px 30px;
    margin: 0px 3% 20px 0px;
    resize: none;
    border-radius: 0px;
    height: auto;
  }
  .form-control:focus {
    border-color: #c3a180;
    outline: 0px none;
    box-shadow: none;
  }
  .has-error input,
  .has-error input:focus,
  .has-error textarea,
  .has-error textarea:focus {
    margin-bottom: 0px;
    border-color: #a94442;
  }
`;

const Label = styled.label`
  font-family: 'Oswald', Verdana, Geneva, sans-serif;
  font-size: 23px;
  cursor: pointer;
  font-weight: normal;
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
  &:hover {
    color: #c3a180;
  }
  &::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: regular;
    content: '\f111';
    margin-right: 0.2em;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    color: #c3a180;
    font-size: 24px;

    p {
      font-weight: normal;
    }
    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f058';
    }
  }
`;

const StyledSection = styled.section`
  padding: 120px 0px;
`;

const SectionRSVP = () => (
  <StyledSection>
    <Grid>
      <Row>
        <Col md={10} mdOffset={1} xs={12} className="text-center">
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
        </Col>
        <Col md={8} mdOffset={2} xs={12} className="text-center">
          <Form>
            <Row className="bot-mrg-20">
              <Col md={4} className="text-center">
                <Input type="checkbox" id="checkbox-1" name="events[]" value="Pre-Wedding Dinner" />
                <Label htmlFor="checkbox-1">
                  Pre-Wedding Dinner
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </Label>
              </Col>
              <Col md={4} className="text-center">
                <Input type="checkbox" id="checkbox-2" name="events[]" value="Ceremonyr" />
                <Label htmlFor="checkbox-2">
                  Ceremony
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </Label>
              </Col>
              <Col md={4} className="text-center">
                <Input type="checkbox" id="checkbox-3" name="events[]" value="Party" />
                <Label htmlFor="checkbox-3">
                  Party
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </Label>
              </Col>
            </Row>
            <Row>
              <div md={6}>
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
              <div md={6}>
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
            </Row>
            <Row>
              <div md={12}>
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
            </Row>
          </Form>

          <button className="btn btn-primary btn-lg" id="ajaxFormSubmit">
            I´m Attending
          </button>
        </Col>
      </Row>
    </Grid>
  </StyledSection>
);

export default SectionRSVP;
