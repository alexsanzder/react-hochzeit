import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

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

const ImageCircle = styled.img`
  border: 20px solid #fff;
`;
const StyledSection = styled.section`
  padding: 120px 0px;
`;

const SectionCouple = () => (
  <StyledSection className="bg-gray-1">
    <Container>
      <Row>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Padme <span>Amidala</span>
            </h2>
            <ImageCircle
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Bride"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
            <SocialIcons>
              <a href="index.html#" target="_blank" className="fabcebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="index.html#" target="_blank" className="instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="index.html#" target="_blank" className="twitter">
                <i className="fab fa-twitter" />
              </a>
              {/* <a href="#" target="_blank" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#" target="_blank" className="google"><i className="fab fa-google-plus"></i></a>
                            <a href="#" target="_blank" className="youtube"><i className="fab fa-youtube-play"></i></a>
                            <a href="#" target="_blank" className="vimeo"><i className="fab fa-vimeo"></i></a> */}
            </SocialIcons>
          </Profile>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Profile>
            <h2>
              Anakin <span>Skywalker</span>
            </h2>
            <ImageCircle
              src="http://via.placeholder.com/323x323"
              className="img-fluid rounded-circle"
              alt="Groom"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu
              faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis
              auctor in est ac dignissim.
            </p>
            <SocialIcons>
              <a href="index.html#" target="_blank" className="fabcebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="index.html#" target="_blank" className="instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="index.html#" target="_blank" className="twitter">
                <i className="fab fa-twitter" />
              </a>
              {/* <a href="#" target="_blank" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#" target="_blank" className="google"><i className="fab fa-google-plus"></i></a>
                            <a href="#" target="_blank" className="youtube"><i className="fab fa-youtube-play"></i></a>
                            <a href="#" target="_blank" className="vimeo"><i className="fab fa-vimeo"></i></a> */}
            </SocialIcons>
          </Profile>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default SectionCouple;
