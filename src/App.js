import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, desktop } from './utils/responsive';
import Links from './components/Links';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Clickit from './components/Clickit';
import CS from './components/CS';

const Container = styled.div`
  margin: 0 auto;
  ${desktop} {
    width: 90%;
  }
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cs" component={CS} />
            <Route path="/clickit" component={Clickit} />
            <Route path="/:project" component={Project} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    );
  }
}

export default App;
