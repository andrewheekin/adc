import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 36px;
  display: flex;
  margin: 5% 23% 25px 23%;
  padding: 0 0 40px 0;
  border-bottom: 1px solid #eee;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  animation: slidedown 1s, fade 0.6s;
  -webkit-animation: slidedown 1s, fade 0.6s;
  -moz-animation: slidedown 1s, fade 0.6s;
  &:hover {
    color: black;
    text-decoration: none;    
  }
`;

const Social = styled.ul`
  margin: -10px 0 0 0;
  animation: slidedown 1s, fade 0.6s;
  -webkit-animation: slidedown 1s, fade 0.6s;
  -moz-animation: slidedown 1s, fade 0.6s;
  li {
    margin: 5px 9px;
    list-style: none outside none;
    display: inline-block;
  }
  i {
    width: 35px;
    height: 25px;
    color: #fff;
    background-color: #909aa0;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -webkit-transition: all ease 0.3s;
    -ms-transition: all ease 0.3s;
    &:hover {
      color: #fff;
      text-decoration: none;
      transition: all ease 0.3s;
      -moz-transition: all ease 0.3s;
      -webkit-transition: all ease 0.3s;
      -ms-transition: all ease 0.3s;
    }
  }
  .fa-envelope:hover {
    background: #4d86c9;
  }
  .fa-twitter:hover {
    background: #00abe3;
  }
  .fa-github:hover {
    background: #343434;
  }
  .fa-linkedin:hover {
    background: #0094bc;
  }
`;

const Header = () => (
  <Container>
    <HeaderLink to="/">andrew heekin</HeaderLink>
    <Social>
      <li>
        <a href="https://github.com/andrewheekin">
          <i className="fa fa-lg fa-github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465">
          <i className="fa fa-lg fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/andrewheekin">
          <i className="fa fa-lg fa-twitter" />
        </a>
      </li>
      <li>
        <a href="mailto:andrewheekin@gmail.com">
          <i className="fa fa-lg fa-envelope" />
        </a>
      </li>
    </Social>
  </Container>
);

export default Header;
