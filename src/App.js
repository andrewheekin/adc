import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { mobile, desktop } from './utils/responsive';
import { checkAuth } from './utils/awsLib';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Links from './components/Links';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Login from './components/Login';
import Signup from './components/Signup';
import NotesHome from './components/NotesHome';
import Note from './components/Note';
import Contact from './components/Contact';
import Clickit from './components/Clickit';
import CS from './components/CS';
import NotFound from './components/NotFound';

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

class App extends React.Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
  };

  async componentDidMount() {
    if (!await checkAuth()) return;
    this.userHasAuthenticated(true)
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push('/login');
  };

  render() {
    const authStatus = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    };

    return (
      <Container>
        <Header />
        <Main>
          <Links handleLogout={this.handleLogout} isAuthenticated={authStatus.isAuthenticated} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cs" component={CS} />
            <Route path="/clickit" component={Clickit} />
            <Route path="/project/:project" component={Project} />
            <UnauthenticatedRoute path="/login" exact component={Login} props={authStatus} />
            <UnauthenticatedRoute path="/signup" exact component={Signup} props={authStatus} />
            <AppliedRoute path="/notes" exact component={NotesHome} props={authStatus} />
            <AuthenticatedRoute path="/notes/:id" exact component={Note} props={authStatus} />
            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(App);
