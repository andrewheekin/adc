import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Links from './components/Links';
import Content from './components/Content';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;  
`;

const Main = styled.div`
  display: flex;
`;

const Header = styled.div`
  font-size: 36px;
  display: flex;
  margin: 4% 25% 20px 21%;
  padding: 0 0 40px 0;
  border-bottom: 1px solid #eee;
`;

const HeaderLink = styled(Link)`
  text-decoration: none!important;
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

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderLink to='/'>andrew heekin</HeaderLink>
          <Social>
            <li><a href="https://github.com/andrewheekin"><i className="fa fa-lg fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465"><i className="fa fa-lg fa-linkedin"></i></a></li>
            <li><a href="https://twitter.com/andrewheekin"><i className="fa fa-lg fa-twitter"></i></a></li>          
            <li><a href="mailto:andrewheekin@gmail.com"><i className="fa fa-lg fa-envelope"></i></a></li>
          </Social>
        </Header>
        <Main>
          <Links />
          <Content />
        </Main>          
      </Container>
    );
  }
}

export default App;
