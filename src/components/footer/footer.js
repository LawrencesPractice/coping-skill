import React from 'react';
import styled from 'styled-components';

// Define the device sizes for the media queries
const size = {
  mobile: '425px',
  tablet: '768px',
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
};

const FooterContainer = styled.footer`
width: 80%;  // navbar takes 80% of the screen width
margin: 0 auto;  // centers the navbar
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  border-bottom: 1px solid #000;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  margin: 20px;
`;

const Title = styled.h3`
  font-weight: bold;
  
`;

const Item = styled.p`
  margin: 10px 0;
  text-decoration: none;  // Remove underline from links
  transition: color 0.3s ease;  // Add transition for hover effect

  &:hover {
 //background: linear-gradient(45deg, #0093E9, #80D0C7);
    color: #80D0C7;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Column>
      <Title>Mindful Living</Title>
      <Item>Guided Meditations</Item>
      <Item>Breathwork Exercises</Item>
      <Item>Mindful Movement</Item>
      <Item>Sleep Stories</Item>
      <Item>Mindfulness Articles</Item>
    </Column>
    <Column>
      <Title>Learn More</Title>
      <Item>About Us</Item>
      <Item>Our Team</Item>
      <Item>Our Mission</Item>
      <Item>Testimonials</Item>
      <Item>FAQs</Item>
    </Column>
    <Column>
      <Title>Connect With Us</Title>
      <Item>Contact Us</Item>
      <Item>Partnerships</Item>
      <Item>Join Our Community</Item>
      <Item>Terms & Conditions</Item>
      <Item>Privacy Policy</Item>
    </Column>
    <Column>
      <Title>Follow Us</Title>
      <Item>Instagram</Item>
      <Item>Twitter</Item>
      <Item>Facebook</Item>
      <Item>Pinterest</Item>
      <Item>LinkedIn</Item>
    </Column>
  </FooterContainer>
);

export default Footer;