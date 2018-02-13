import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

const Profile = styled.div`
  img {
    margin: 40px auto;
  }
`;

const SocialIcons = styled.div`
  margin: 27px auto;
  a {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: normal;
    line-height: 1.7em;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    margin: 5px;
    border: 4px solid #62655a;
    background: #62655a;
    &:hover {
      color: #fff;
      border: 4px solid #c3a180;
      background: #c3a180;
    }
  }
`;

const SectionCouple = () => (
  <section id="couple" className="bg-gray-1">
    <Grid>
      <Row>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Padme <span>Amidala</span>
            </h2>
            <img
              src="http://via.placeholder.com/323x323"
              className="img-responsive img-circle"
              alt="Bride"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
            <SocialIcons>
              <a href="index.html#" target="_blank" className="facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="index.html#" target="_blank" className="instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="index.html#" target="_blank" className="twitter">
                <i className="fa fa-twitter" />
              </a>
              {/* <a href="#" target="_blank" className="pinterest"><i className="fa fa-pinterest-p"></i></a>
                            <a href="#" target="_blank" className="google"><i className="fa fa-google-plus"></i></a>
                            <a href="#" target="_blank" className="youtube"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" target="_blank" className="vimeo"><i className="fa fa-vimeo"></i></a> */}
            </SocialIcons>
          </Profile>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Anakin <span>Skywalker</span>
            </h2>
            <img
              src="http://via.placeholder.com/323x323"
              className="img-responsive img-circle"
              alt="Groom"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
            <SocialIcons>
              <a href="index.html#" target="_blank" className="facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="index.html#" target="_blank" className="instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="index.html#" target="_blank" className="twitter">
                <i className="fa fa-twitter" />
              </a>
              {/* <a href="#" target="_blank" className="pinterest"><i className="fa fa-pinterest-p"></i></a>
                            <a href="#" target="_blank" className="google"><i className="fa fa-google-plus"></i></a>
                            <a href="#" target="_blank" className="youtube"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" target="_blank" className="vimeo"><i className="fa fa-vimeo"></i></a> */}
            </SocialIcons>
          </Profile>
        </Col>
      </Row>
    </Grid>
  </section>
);

export default SectionCouple;
