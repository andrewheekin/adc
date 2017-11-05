import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 35px;
  display: flex;
  margin: 5% 23% 20px 23%;
  padding: 0 0 40px 0;
  border-bottom: 1px solid #eee;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Social = styled.ul`
  margin: -10px 0 0 0;
  li {
    margin: 5px 9px;
    list-style: none outside none;
    display: inline-block;
  }
  i {
    width: 35px;
    height: 25px;
    color: #FFF;
    background-color: #909AA0;
    font-size: 20px;
    text-align:center;
    padding-top: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -webkit-transition: all ease 0.3s;
    -ms-transition: all ease 0.3s;
    &:hover {
      color: #FFF;
      text-decoration: none;
      transition: all ease 0.3s;
      -moz-transition: all ease 0.3s;
      -webkit-transition: all ease 0.3s;
      -ms-transition: all ease 0.3s;      
    }    
  }
  .fa-envelope:hover {
    background: #4D86C9;
  }
  .fa-twitter:hover {
    background: #00ABE3;
  }
  .fa-github:hover {
      background: #343434;
  }
  .fa-linkedin:hover {
      background: #0094BC;
  }  
`;

const Header = () =>
  <HeaderContainer>
    <HeaderLink to='/'>andrew heekin</HeaderLink>
    <Social>
      <li><a href="https://github.com/andrewheekin"><i className="fa fa-lg fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465"><i className="fa fa-lg fa-linkedin"></i></a></li>
      <li><a href="https://twitter.com/andrewheekin"><i className="fa fa-lg fa-twitter"></i></a></li>          
      <li><a href="mailto:andrewheekin@gmail.com"><i className="fa fa-lg fa-envelope"></i></a></li>
    </Social>
  </HeaderContainer>

export default Header;
