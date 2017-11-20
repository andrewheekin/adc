import React, { Component } from 'react';
import styled from 'styled-components';
import Links from './components/Links';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { mobile, desktop } from './utils/responsive';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Main = styled.div`
  ${desktop} {
    display: flex;    
  }
  ${mobile} {
    display: block;
  }
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
