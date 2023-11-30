import React from 'react';
import mainLogo from '../../assets/textLogo.png';

import {
  Root,
  Navbar2,
  Container,
  Column,
  Logo,
  Icon,
  Column2,
  Column3,
  SignIn,
  GetStarted,
  Explore,
  NavLinkDropdown,
  ChevronDown,
  Icon2,
  Column4,
  Button,
  Button2
} from './styles';

const Navigation = () => {
  return (
    <Navbar2>
      <Container>
        <Column>
          <Logo>
            <img src={mainLogo} alt="fireSpot" />

          </Logo>
        </Column>
        <Column2>
          <SignIn >Sign in</SignIn>
          <GetStarted to="/getStarted">Get started</GetStarted>
          <Explore>Explore</Explore>
          <NavLinkDropdown to="/">
            <div className="about">About</div>
          </NavLinkDropdown>
          <Column4>
            <Button>
              <div className="logIn">Log in</div>
            </Button>
            <Button2>
              <div className="signUp">Sign up</div>
            </Button2>
          </Column4>
        </Column2>
      </Container>
    </Navbar2>
  );
};

export default Navigation;