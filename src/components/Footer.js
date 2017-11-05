import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: .9em;
  padding: 100px 0 20px 0;
  margin: 0 0 0 23%
`;

const FooterLink = styled.div`
  color: gray;
  a {
    text-decoration: none;
    color: gray;
  }
`;

const Footer = () =>
  <Container>
    <FooterLink><a href="http://andrewheekin.com">andrewheekin.com</a> | © 2017</FooterLink>
  </Container>

export default Footer;