import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

import Countdown from 'react-countdown-now';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StyledSection = styled.section`
  background: url('http://via.placeholder.com/1100x619') no-repeat;
  padding: 120px 0px;
  background-attachment: fixed;
  background-size: cover;
`;

const TimeCircles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  > div {
    position: absolute;
    text-align: center;
  }
`;

const TimeTilte = styled.h4`
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Century Gothic', Arial;
`;

const TimeNumbers = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-family: 'Century Gothic', Arial;
  font-size: 300%;
  margin-top: 0.4em;
  font-weight: bold;
`;

const TimeDays = styled.div`
  top: 48px;
  left: 0px;
  width: 137px;
`;

const TimeHours = styled.div`
  top: 48px;
  left: 137px;
  width: 137px;
`;

const TimeMinutes = styled.div`
  top: 48px;
  left: 274px;
  width: 137px;
`;

const TimeSeconds = styled.div`
  top: 48px;
  left: 411px;
  width: 137px;
`;

const Completionist = () => <span>Tadaaaa!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  }
  const handleSeconds = () => seconds * 100 / 60;

  const handleMinutes = () => minutes * 100 / 60;

  const handleHours = () => hours * 100 / 24;

  const handleDays = () => days * 100 / 365;
  // Render a countdown
  return (
    /*     <TimeCircles>
      <TimeDays>
        <TimeTilte>Days</TimeTilte>
        <TimeNumbers>{days}</TimeNumbers>
      </TimeDays>
      <TimeHours>
        <TimeTilte>Hours</TimeTilte>
        <TimeNumbers>{hours}</TimeNumbers>
      </TimeHours>
      <TimeMinutes>
        <TimeTilte>Minutes</TimeTilte>
        <TimeNumbers>{minutes}</TimeNumbers>
      </TimeMinutes>
      <TimeSeconds>
        <TimeTilte>Seconds</TimeTilte>
        <TimeNumbers>{seconds}</TimeNumbers>
      </TimeSeconds>
    </TimeCircles> */
    <div style={{ width: '200px' }}>
      <CircularProgressbar
        counterClockwise
        initialAnimation="-100"
        percentage={handleDays()}
        textForPercentage={() => days}
      />
      <CircularProgressbar
        counterClockwise
        initialAnimation="-100"
        percentage={handleHours()}
        textForPercentage={() => hours}
      />
      <CircularProgressbar
        counterClockwise
        initialAnimation="-100"
        percentage={handleMinutes()}
        textForPercentage={() => minutes}
      />
      <CircularProgressbar
        counterClockwise
        initialAnimation="-100"
        percentage={handleSeconds()}
        textForPercentage={() => seconds}
      />
    </div>
  );
};

const SectionCounter = () => (
  <StyledSection>
    <Grid>
      <Row>
        <Col md={8} mdOffset={2} xs={12} className="text-center">
          <h2>Counting the minutes for the big day!</h2>
          <Countdown date={'May 26, 2018 12:00:00'} renderer={renderer} />
        </Col>
      </Row>
    </Grid>
  </StyledSection>
);

export default SectionCounter;
