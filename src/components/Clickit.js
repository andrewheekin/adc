import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  border-radius: 3px;
  height: 2em;
  padding: 8px;
  width: 500px;
  background: rgba(228, 228, 228, 1);
  &:hover,
  &:focus {
    background: rgba(228, 228, 228, 0.8);
  }
`;

const Button = styled.button`
  margin: 0 0 0 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover,
  &:focus {
    background: rgba(228, 228, 228, 0.3);
  }
`;

const Label = styled.div`
  font-size: 0.8em;
  opacity: 0.6;

`;

const Container = styled.div`
  display: 'flex';
`;

class Clickit extends React.Component {
  state = { url: 'https://google.com/' };

  handleChange = e => this.setState({ url: e.target.value });

  handleStart = async () => {
    if (!this.state.url) return;
    this.scrape();

  };

  handleStop = () => {

  };

  scrape = async () => {
    let response = await fetch(this.state.url);
    let page = await response.text();
    let anchorTags = page.match(/<a.*<\/a>/g);
    let hrefs = anchorTags.map(a => a.match(/http.*"/g)[0]);
    console.log(hrefs)
  }

  render() {
    return (
      <Container>
        <Label>URL</Label>
        <div style={{ display: 'flex' }}>
          <Input type="text" onChange={this.handleChange} value={this.state.url} autoFocus />
          <Button onClick={this.handleStart}>Click new links over next 5 min</Button>
          <Button onClick={this.handleStop}>Stop</Button>
        </div>
      </Container>
    );
  }
}

export default Clickit;
