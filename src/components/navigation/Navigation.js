import React from 'react';
import { useLocation } from 'react-router-dom';
import mainLogo from '../../assets/textLogo.png';
import {
  Navbar2,
  Container,
  Column,
  Logo,
  Column2,
  GetStarted,
  Explore,
  NavLinkDropdown,
  Column4,
  Button,
  Button2
} from './styles';

// Import the MindfulIntroComponent
import MindfulIntroComponent from '../explore/mindfulIntro/mindfulIntro';

const Navigation = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
console.log(location.pathname)
  return (
    <>
      <Navbar2 isHomepage={isHomepage}>
      <Container>
        <Column>
          <Logo to="/">
            <img src={mainLogo} alt="fireSpot" />
          </Logo>
        </Column>
        <Column2>
          <GetStarted isHomepage={isHomepage} to="/innerCalmExercise">Get started</GetStarted>
          <Explore isHomepage={isHomepage}  to="/explore">Explore</Explore>
           <NavLinkDropdown to="/" isHomepage={isHomepage}>About</NavLinkDropdown>
          <Column4>
            <Button isHomepage={isHomepage} >
              <div className="logIn" isHomepage={isHomepage}>Log in</div>
            </Button>
            <Button2>
              <div className="signUp">Sign up</div>
            </Button2>
          </Column4>
        </Column2>
      </Container>
    </Navbar2>       {isHomepage && <MindfulIntroComponent />}
</>
  );
};

export default Navigation;