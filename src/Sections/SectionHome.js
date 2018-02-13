import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

const Title = styled.h3`
  span {
    -moz-border-top-colors: none;
    -moz-border-right-colors: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    border-image: none;
    display: inline-block;
    margin: 5px 10px;
    width: 40px;
    border-color: #d6516d -moz-use-text-color -moz-use-text-color;
    border-style: solid none none;
    border-width: 1px 0px 0px;
    @media (max-width: 767px) {
      width: 17px;
      margin: 7px 5px;
    }
  }
  @media (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const Names = styled.ul`
  list-style: none;
  display: inline;
  font-size: 100px;
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
  background: #c3a180;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 63px;
  font-weight: normal;
  line-height: 1.5em;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
  top: -15px;
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

const Date = styled.div`
  font-size: 50px;
  span {
    font-size: 80px;
    border-bottom: solid 2px #c3a180;
    line-height: 1em;
    @media (max-width: 767px) {
      font-size: 45px;
      line-height: 1em;
    }
  }
  @media (max-width: 767px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;

const Hour = styled.div`
  font-size: 30px;
  margin-top: 20px;
  span {
    font-size: 20px;
  }
`;

const Place = styled.div`
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Wrapper = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  height: 800px;
  padding: 50px 0px;
  position: relative;
  padding-top: 6%;
  @media (max-width: 767px) {
    height: auto;
  }
`;
const SectionHome = () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={12}>
          <Title>
            <span />Wir sagen Ja!<span />
          </Title>
          <Names>
            <li>Padme</li>
            <Circle>&amp;</Circle>
            <li>Anakin</li>
          </Names>
          <Date>
            <span>01. </span> Juni 2018
          </Date>
          <Hour>
            12:00 <span>pm</span>
          </Hour>
          <Place>
            <h3>Lars Homestead, Schott el-Djerid</h3>
            <p>Alderaan.</p>
          </Place>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);

export default SectionHome;
