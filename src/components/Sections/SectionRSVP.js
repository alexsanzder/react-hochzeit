import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col, FormGroup, Button, Input } from 'reactstrap';

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

const StyledLabel = styled.label`
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

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
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
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }} xs={12} className="text-center">
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
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <Form>
            <Row className="bot-mrg-20">
              <Col md={4} className="text-center">
                <StyledInput
                  type="checkbox"
                  id="checkbox-1"
                  name="events[]"
                  value="Pre-Wedding Dinner"
                />
                <StyledLabel htmlFor="checkbox-1">
                  Pre-Wedding Dinner
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </StyledLabel>
              </Col>
              <Col md={4} className="text-center">
                <StyledInput type="checkbox" id="checkbox-2" name="events[]" value="Ceremonyr" />
                <StyledLabel htmlFor="checkbox-2">
                  Ceremony
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </StyledLabel>
              </Col>
              <Col md={4} className="text-center">
                <StyledInput type="checkbox" id="checkbox-3" name="events[]" value="Party" />
                <StyledLabel htmlFor="checkbox-3">
                  Party
                  <p>
                    Lars Homestead, <br /> Schott el-Djerid <br />Alderaan.
                  </p>
                </StyledLabel>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input type="name" name="name" placeholder="Your Name" id="rsvpName" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="email" name="email" placeholder="Your Email" id="rsvpEmail" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Input type="textarea" rows="5" name="text" placeholder="Write your message..." id="rsvpText" />
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Button className="btn btn-primary btn-lg">I´m Attending</Button>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionRSVP;
