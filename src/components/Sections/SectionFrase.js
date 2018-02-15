import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

const StyledSection = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  h2 {
    line-height: 1.7em;
    margin-bottom: 50px;
  }
  i {
    color: #c3a180;
  }
`;

const SectionFrase = () => (
  <StyledSection>
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }} xs={12} className="text-center">
          <h2>
            <i className="fa fa-quote-left" aria-hidden="true" /> I thought we had decided not to
            fall in love. That we'd be forced to live a lie, and that it would destroy our lives...{' '}
            <i className="fa fa-quote-right" aria-hidden="true" />
          </h2>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionFrase;
