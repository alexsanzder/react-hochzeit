import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';
import Sticky from 'react-stickynode';

const Names = styled.ul`
  list-style: none;
  display: inline;
  font-size: 30px;
  text-transform: none !important;
  padding: 0px;
  li {
    display: inline-block;
  }
  @media (max-width: 767px) {
    font-size: 19px;
  }
`;

const Circle = styled.li`
  background: #c3a180;
  width: 20px;
  height: 20px;
  font-size: 13px;
  top: -5px;
  text-align: center;
  font-weight: normal;
  line-height: 1.5em;
  border-radius: 100px;
  margin: 0px;
  color: #fff;
  position: relative;
`;

const StyledSticky = styled(Sticky)`
  height: 50px;
  z-index: 1200;
`;

const NavHeader = styled.header``;

const Header = () => (
  <NavHeader>
    <StyledSticky innerZ="1200">
      <Navbar id="nav" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="index.html#">
              <Names>
                <li>Padme</li>
                <Circle>&amp;</Circle>
                <li>Anakin</li>
              </Names>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledSticky>
  </NavHeader>
);

export default Header;
