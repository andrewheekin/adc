import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.ul`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 19px;
  letter-spacing: .01em;
  list-style-type: none;
  padding: 0px;
  margin: 0 0 0 9%;
  width: 14%;  
  li {
    padding-bottom: 11px;
  }
`;

const StyledLink = styled(Link)`
  color: #337ab7;
  text-decoration: none;
`;

const Links = () =>
  <LinksContainer>
    <li><StyledLink to='/'>Projects</StyledLink></li>      
    <li><StyledLink to='/about'>About</StyledLink></li>
    <li><StyledLink to='/about'>Contact</StyledLink></li>
    <li><StyledLink to='/about'>CS</StyledLink></li>    
  </LinksContainer>

export default Links;