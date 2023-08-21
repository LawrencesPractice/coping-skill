import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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