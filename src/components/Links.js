import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.ul`
  font-size: 20px;
  list-style-type: none;
  padding: 0px;
  margin: 0 0 0 10%;
  width: 11%;  
  li {
    padding-bottom: 7px;
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