import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Background = styled.div`
  background-image: url(https://source.unsplash.com/1600x900/?wedding);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: blur(15px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 480px;
  margin: 80px auto;
  padding: 20px 40px 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  .login-form {
    text-align: left;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    top: 5px;
    z-index: -2;
    transform: rotateZ(-2deg);
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3.5px;
    left: 0;
    background: #fff;
    z-index: -1;
    transform: rotateZ(4deg);
    border: 1px solid #ccc;
  }
`;

const Login = styled.div`
  padding: 20px 0 20px 0;
  h5 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;

  &::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: regular;
    content: '\f111';
    margin-right: 0.3em;
  }
`;

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
    &::before {
      color: #c3a180;

      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f058';
    }
  }
`;

const StyledForm = styled(Form)`
  input,
  textarea {
    border: 2px solid #b6b7b7;
    color: #363b3f;
    background: transparent none repeat scroll 0% 0%;
    padding: 15px 30px;
    margin: 10px 3% 20px 0px;
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
const SectionLogin = props => (
  <StyledSection>
    <Background />
    <Container className="h-100">
      <Row className="h-100">
        <Col md={{ size: 4, offset: 8 }} xs={4} className="align-self-center text-center">
          <Card>
            <Login>
              <h5>Please use your invitation´s password to view this content</h5>
              <StyledForm method="get">
                <FormGroup>
                  <Input type="name" name="name" placeholder="Your Name" id="rsvpName" />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Your Invitation's Password"
                    id="rsvpPassword"
                  />
                </FormGroup>
                <FormGroup>
                  <StyledInput
                    type="checkbox"
                    id="rememberme"
                    name="rememberme"
                    value="Rmemeber me"
                  />
                  <StyledLabel htmlFor="rememberme">Remember me the next time.</StyledLabel>
                </FormGroup>

                <div className="top-mrg-30">
                  <Button color="primary" size="lg" block onClick={props.login}>
                    Log in
                  </Button>
                  <p className="top-mrg-20">
                    <a href="#" className="forgot">
                      Can't find your invitation's password?
                    </a>
                  </p>
                </div>
                {/* <p>
                    <strong>New to TimeInfo?</strong>
                    <br />
                    <a href="#" id="flip-btn" className="signup signup_link">
                      Sign up for a new account
                    </a>
                  </p> */}
              </StyledForm>
            </Login>
            {/* <div className="back signup_form">
              <p>Sign Up for Your New Account</p>
              <form className="login-form">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Username" />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-cyan">
                        <span className="fa fa-refresh" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Email" />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                  </div>
                </div>

                <div className="form-group sign-btn">
                  <input type="submit" className="btn" value="Sign up" />
                  <p>
                    You have already Account So{' '}
                    <a href="#" id="unflip-btn" className="signup">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div> */}
          </Card>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);
export default SectionLogin;
