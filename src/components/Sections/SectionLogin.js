import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Background = styled.div`
  background-image: url(http://via.placeholder.com/1100x619);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: blur(5px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Login = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
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

const SectionLogin = () => (
  <StyledSection>
    <Background />
    <Container className="h-100">
      <Row className="h-100">
        <Col md={{ size: 4, offset: 8 }} xs={4} className="align-self-center text-center">
          <Login className="">
            <div className="front signin_form">
              <h3>Please Login to view this content</h3>
              <form className="login-form">
                <div className="form-group">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Type your email" />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Type your invitation password"
                    />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                  </div>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />Remember me next time.
                  </label>
                </div>

                <div className="form-group sign-btn">
                  <input type="submit" className="btn" value="Log in" />
                  <p>
                    <a href="#" className="forgot">
                      Can't find your invitation password?
                    </a>
                  </p>
                  {/* <p>
                    <strong>New to TimeInfo?</strong>
                    <br />
                    <a href="#" id="flip-btn" className="signup signup_link">
                      Sign up for a new account
                    </a>
                  </p> */}
                </div>
              </form>
            </div>
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
          </Login>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);
export default SectionLogin;
