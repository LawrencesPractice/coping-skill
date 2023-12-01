import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mindfulImage from '../../assets/mindful.png';

// Define the device sizes for the media queries
const size = {
  mobile: '425px',
  tablet: '768px',
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
};

export const Navbar2 = styled.div`
background-image: ${({ isHomepage }) => (isHomepage ? `url(${mindfulImage})` : 'none')};  background-position: center top -0px; /* Cut off top part by 100px */
  width: 80%;
  margin: 0 auto;
  padding: 0 50px;
  height: 93px;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  box-shadow: inset 0px -0.5px 0px 0px #000;

  @media ${device.tablet} {
    height: auto;
    padding: 0 20px;
  }

  @media ${device.mobile} {
    height: auto;
    padding: 0 10px;
  }
`;

export const Container = styled.div`
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
`;

export const Column = styled.div`
  width: min-content;
  height: min-content;
`;

export const Logo = styled(Link)`
cursor: pointer;
  width: 60px;
  height: 24px;
  font-size: 23px;
  img{
    width: 200px;
  height: auto;
  position: absolute;
    top: -58px;
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
`;

export const Column2 = styled.nav`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background-color: transparent;
  color: white;
  margin-top: 30px;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 10px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Column3 = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  align-items: flex-start;
  gap: 28px;
  overflow: hidden;
`;

export const SignIn = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;  color: white;

  color: #000;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
  transition: color 0.2s ease-in-out;

&:hover,
&:focus {
  color: #007BFF;
  outline: none;
}

`;

export const GetStarted = styled(Link)`
color: white;
margin: 0 10px;
text-decoration: none;
color: ${({ isHomepage }) => (isHomepage ? `white` : 'black')};  

  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
  &:hover,
  &:focus {
    color: #007BFF;
    outline: none;
  }

`;

export const Explore = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: ${({ isHomepage }) => (isHomepage ? `white` : 'black')};  
  font-size: 18px;  

  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
  transition: color 0.2s ease-in-out;

&:hover,
&:focus {
  color: #007BFF;
  outline: none;
}
`;

export const NavLinkDropdown = styled(Link)`
color: white;
margin: 0 10px;
text-decoration: none;
color: ${({ isHomepage }) => (isHomepage ? `white` : 'black')};  

font-size: 18px;
line-height: 150%;
font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
width: min-content;
height: min-content;
white-space: nowrap;
flex-direction: column;
transition: color 0.2s ease-in-out;

&:hover,
&:focus {
  color: #007BFF;
  outline: none;
}
`;

export const ChevronDown = styled.div`
  width: 21px;
  height: 21px;
`;

export const Icon2 = styled.div`
  width: 100%;
  height: 100%;
`;

export const Column4 = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const Button = styled.button`
  width: max-content;
  height: min-content;
  padding: 10px 18px;  color: white;
  color: ${({ isHomepage }) => (isHomepage ? `white` : 'black')};  
  font-size: 19px;
  outline: none;
  border: 1px solid #000;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-weight: bold;
  box-shadow: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #007bff;
    border-color: #007bff;
  }
`;
export const Button2 = styled.button`
width: max-content;
height: min-content;
padding: 10px 18px;
font-size: 19px;

outline: none;
border: 1px solid #000;
color: white;
background-color: black;
display: inline-flex;
align-items: center;
gap: 4px;
transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
font-weight: bold;
box-shadow: none;
cursor: pointer;
&:hover,
&:focus {
  color: #007BFF;
  outline: none;
}
`;