import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
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
  <Wrapper data-stellar-background-ratio="0.5">
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
  </Wrapper>
);

export default SectionFrase;
