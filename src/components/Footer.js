import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

const Wrapper = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
`;

const Names = styled.ul`
  list-style: none;
  display: inline;
  font-size: 43px;
  font-weight: 300;
  padding: 0px;
  li {
    display: inline-block;
    @media (max-width: 767px) {
      display: list-item;
    }
  }

  @media (max-width: 767px) {
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Circle = styled.li`
  width: 64px;
  height: 64px;
  font-size: 41px;
  line-height: 1.5em;
  top: 0px;
  background: #c3a180;
  text-align: center;
  font-weight: normal;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
  position: relative;

  @media (max-width: 767px) {
    width: 64px;
    height: 64px;
    font-size: 41px;
    line-height: 1.5em;
    top: 0px;
    margin: auto;
  }
`;

const Copyright = styled.div`
  margin-top: 40px;
`;

const Footer = () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col md={10} mdOffset={1} xs={12} className="text-center">
          <h1>Thank You!</h1>
          <Names>
            <li>Padme</li>
            <Circle>&amp;</Circle>
            <li>Anakin</li>
          </Names>
          <Copyright>
            All Rights Reserved © 2018 |{' '}
            <a href="http://weetsi.com" target="_blank" rel="noopener noreferrer">
              Alejandro Sánchez
            </a>
          </Copyright>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);

export default Footer;