import React, { Component } from 'react';
import styled from 'styled-components';
import Links from './components/Links';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;  
`;

const Main = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Links />
          <Content />
        </Main>
        <Footer />      
      </Container>
    );
  }
}

export default App;
