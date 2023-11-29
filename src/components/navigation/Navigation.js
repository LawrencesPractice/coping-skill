import React from 'react';
import styled from 'styled-components';
const Root = styled.div`
  width: 100%;
  height: min-content;
  flex-direction: column;
  align-items: flex-start;
`;

const Navbar2 = styled.div`
  width: 90%;
  height: 93px;
  flex-direction: column;
  justify-content: center;
  padding: 0 56px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: inset 0px -0.5px 0px 0px #000;
`;

const Container = styled.div`
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
`;

const Column = styled.div`
  width: min-content;
  height: min-content;
`;

const Logo = styled.div`
  width: 55px;
  height: 24px;
  font-size: 23px;
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
`;

const Column2 = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background-color: #fff;
`;

const Column3 = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  align-items: flex-start;
  gap: 28px;
  overflow: hidden;
`;

const SignIn = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
`;

const GetStarted = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
`;

const Explore = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
`;

const NavLinkDropdown = styled.div`
color: #000;
font-size: 18px;
line-height: 150%;
font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
width: min-content;
height: min-content;
white-space: nowrap;
flex-direction: column;
`;

const chevronDown = styled.div`
  width: 21px;
  height: 21px;
`;

const Icon2 = styled.div`
  width: 100%;
  height: 100%;
`;

const Column4 = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button`
  width: max-content;
  height: min-content;
  padding: 7px 18px;
  outline: solid 0.1px #000;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;



const Button2 = styled.button`
width: max-content;
height: min-content;
  padding: 7px 18px;
  outline: solid 0.1px #000;
  background-color: black;
  color: white;
`;

const Navigation = () => {
  return (
    <Root>
      <Navbar2>
        <Container>
          <Column>
            <Logo>
              <p>Mindspace</p>
            </Logo>
          </Column>
          <Column2>
            <Column3>
              <SignIn>Sign in</SignIn>
              <GetStarted>Get started</GetStarted>
              <Explore>Explore</Explore>
              <NavLinkDropdown>
                <div className="about">About</div>
                <div className={chevronDown}>
                </div>

              </NavLinkDropdown>
            </Column3>
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
    </Root>

  );
};

export default Navigation;