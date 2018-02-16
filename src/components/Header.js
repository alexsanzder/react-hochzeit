import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import Sticky from 'react-stickynode';
import { Container, Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';

const StyledNavbar = styled(Navbar)`
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
  > li a,
  a:not([href]):not([tabindex]) {
    color: #777;
    cursor: pointer;
    &:hover {
      color: #333;

      text-decoration: none;
    }
  }
`;

const StyledNavBrand = styled(NavLink)`
  &:hover {
    text-decoration: none;
  }
`;
const StyledLink = styled(NavLink)`
  color: #777;
  padding: 10px 6px;
  &.active {
    color: #c3a180 !important;
    background: none;
  }
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
  &::after {
    content: '/';
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const Names = styled.ul`
  color: #777;
  list-style: none;
  display: inline;
  font-size: 30px;
  text-transform: none !important;
  padding: 0px;
  li {
    display: inline-block;
    &:hover {
      color: #c3a180;
      text-decoration: none;
      background-color: transparent;
    }
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
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
`;

const StyledSticky = styled(Sticky)`
  height: 50px;
  z-index: 1200;
`;

const NavHeader = styled.header``;

export default class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  signOut = this.props.fakeAuth.isAuthenticated ? (
    <a
      onClick={() => {
        this.props.fakeAuth.signout(() => this.props.history.push('/'));
      }}
    >
      Sign out
    </a>
  ) : (
    <p>You are not logged in.</p>
  );

  render() {
    console.log(this.props);

    return (
      <NavHeader>
        <StyledSticky innerZ="1200">
          <StyledNavbar light expand="md">
            <Container>
              <StyledNavBrand exact to="/">
                <Names>
                  <li>Padme</li> <Circle>&amp;</Circle> <li>Anakin</li>
                </Names>
              </StyledNavBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <StyledNav className="ml-auto">
                  <li>
                    <StyledLink activeClassName="active" to="/">
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
                  <li>{this.signOut}</li>
                </StyledNav>
              </Collapse>
            </Container>
          </StyledNavbar>
        </StyledSticky>
      </NavHeader>
    );
  }
}
