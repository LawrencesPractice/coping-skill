import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/deep-breathing">Deep Breathing</NavLink>
      <NavLink to="/muscle-relaxation">Muscle Relaxation</NavLink>
      <NavLink to="/irrational-thoughts">Irrational Thoughts</NavLink>
      <NavLink to="/radical-acceptance">Radical Acceptance</NavLink>
      <NavLink to="/self-soothe">Self Soothe</NavLink>
      <NavLink to="/imagery">Imagery</NavLink>
    </Nav>
  );
};

export default Navigation;