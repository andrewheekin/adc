import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, desktop } from '../utils/responsive';

const LinksContainer = styled.div`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 19px;
  letter-spacing: 0.01em;
  box-sizing: border-box;
  animation: fade 0.6s;
  -webkit-animation: fade 0.6s;
  -moz-animation: fade 0.6s;
  ${desktop} {
    width: 20%;
    padding: 0 0 0 30px;
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
  margin: 25px 15px;
`;

const StyledLink = styled(Link)`
  color: #337ab7;
  text-decoration: none;
`;

class Links extends React.Component {
  render() {
    return (
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
          {this.props.isAuthenticated && (
            <li>
              <div onClick={this.props.handleLogout}>Logout</div>
            </li>
          )}
        </Desktop>
        <Mobile>
          <StyledLink to="/">Projects</StyledLink> | <StyledLink to="/about">About</StyledLink> |{' '}
          <StyledLink to="/contact">Contact</StyledLink>
        </Mobile>
      </LinksContainer>
    );
  }
}

export default Links;
