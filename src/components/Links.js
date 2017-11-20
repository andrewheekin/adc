import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, desktop } from '../utils/responsive';

const LinksContainer = styled.div`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 19px;
  letter-spacing: 0.01em;
  padding: 0px;
  ${desktop} {
    width: 20%;
  }
`;

const Desktop = styled.ul`
  ${mobile} {
    display: none;
  }
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    padding-bottom: 11px;
  }
`;

const Mobile = styled.div`
  ${desktop} {
    display: none;
  }
  text-align: center;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  color: #337ab7;
  text-decoration: none;
`;

const Links = () => (
  <LinksContainer>
    <Desktop>
      <li>
        <StyledLink to="/">Projects</StyledLink>
      </li>
      <li>
        <StyledLink to="/about">About</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">Contact</StyledLink>
      </li>
      <li>
        <StyledLink to="/cs">CS</StyledLink>
      </li>
    </Desktop>
    <Mobile>
      <StyledLink to="/">Projects</StyledLink> | <StyledLink to="/about">About</StyledLink> |{' '}
      <StyledLink to="/contact">Contact</StyledLink> | <StyledLink to="/cs">CS</StyledLink>
    </Mobile>
  </LinksContainer>
);

export default Links;
