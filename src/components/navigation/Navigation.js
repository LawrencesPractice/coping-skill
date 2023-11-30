import React from 'react';
import mainLogo from '../../assets/textLogo.png';

import {
  Navbar2,
  Container,
  Column,
  Logo,
  Column2,
  SignIn,
  GetStarted,
  Explore,
  NavLinkDropdown,
  Column4,
  Button,
  Button2
} from './styles';

const Navigation = () => {
  return (
    <Navbar2>
      <Container>
        <Column>
          <Logo to="/">
            <img src={mainLogo} alt="fireSpot" />

          </Logo>
        </Column>
        <Column2>
          <GetStarted to="/">Get started</GetStarted>
          <Explore to="/getStarted">Explore</Explore>
          <NavLinkDropdown to="/">
            About
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