import React from 'react';
import styled from 'styled-components';

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
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center">
          <h2>
            <i className="fa fa-quote-left" aria-hidden="true" /> I thought we had decided not to
            fall in love. That we'd be forced to live a lie, and that it would destroy our lives...{' '}
            <i className="fa fa-quote-right" aria-hidden="true" />
          </h2>
        </div>
      </div>
    </div>
  </StyledSection>
);

export default SectionFrase;
