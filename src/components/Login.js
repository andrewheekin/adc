import React from 'react';
import { Auth } from 'aws-amplify';
import mixpanel from 'mixpanel-browser';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';

export default class Login extends React.Component {
  state = {
    isLoading: false,
    email: '',
    password: '',
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.email, this.state.password);
      // TODO: follow up on https://github.com/aws/aws-amplify/issues/249
      // The username property is returning every time but the id property is not.
      // The id property is what is going to the server (event.requestContext.identity.cognitoIdentityId)
      const { username } = await Auth.currentUserInfo();

      mixpanel.identify(username);
      mixpanel.people.set(username, { $email: this.state.email });
      mixpanel.track('Login');
      this.props.userHasAuthenticated(true);
      this.props.history.push('/notes');
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div style={{ padding: '60px 0' }}>
        <form onSubmit={this.handleSubmit} style={{ margin: '0 auto', maxWidth: '320px' }}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}
