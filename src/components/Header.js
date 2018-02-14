import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';
import Sticky from 'react-stickynode';

const NavBar = styled(Navbar)`
  font-family: 'Oswald', Verdana, Geneva, sans-serif;
  font-size: 20px;
  z-index: 998;
  width: 100%;
  padding: 20px 0px;
  background-color: #fff;
  border: 0px;
`;

const StyledNav = styled(Nav)`
  padding: 0px 10px;
`;

const StyledLink = styled(NavLink)`
  padding: 10px 6px;
  &.active {
    color: #c3a180 !important;
    background: none;
  }
  &::after {
    content: '/';
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

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
      <NavBar collapseOnSelect>
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
          <StyledNav pullRight>
            <li>
              <StyledLink exact activeClassName="active" to="/">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/wedding">
                Wedding
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/accommodation">
                Accommodation
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/gallery">
                Gallery
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/registry">
                Registry
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/faqs">
                FAQs
              </StyledLink>
            </li>
          </StyledNav>
        </Navbar.Collapse>
      </NavBar>
    </StyledSticky>
  </NavHeader>
);

export default Header;
