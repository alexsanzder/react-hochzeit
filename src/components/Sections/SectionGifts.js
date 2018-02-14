import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col, Carousel } from 'react-bootstrap';

const Icon = styled.i`
  width: 30px;
  height: 30px;
  margin-top: -15px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
`;

const CorouselImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const CarouselItem = styled(Carousel.Item)`
  margin: 5px;
  background: #fff;
  padding: 30px;
`;

const Wrapper = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
`;

const SectionGifts = () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col md={10} mdOffset={1} xs={12} className="text-center">
          <div className="title-block">
            <h1>
              Gifts{' '}
              <span>
                <em>Registry</em>
              </span>
            </h1>
            <div className="divider" />
            <p>
              <em>We are registered at the following shops with our names.</em>
            </p>
          </div>
          <Carousel
            prevIcon={<Icon className="fas fa-arrow-circle-left" />}
            nextIcon={<Icon className="fas fa-arrow-circle-right" />}
          >
            <CarouselItem>
              <CorouselImage src="http://via.placeholder.com/249x67" alt="" />
            </CarouselItem>
            <CarouselItem>
              <CorouselImage src="http://via.placeholder.com/249x67" alt="" />
            </CarouselItem>
            <CarouselItem>
              <CorouselImage src="http://via.placeholder.com/249x67" alt="" />
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);

export default SectionGifts;
