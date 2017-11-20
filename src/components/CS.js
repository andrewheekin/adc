import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  animation: fade .6s;
  -moz-animation: fade .6s;
  -webkit-animation: fade .6s;  
`;

class CS extends React.PureComponent {
  
  render() {
    return <Container>sup</Container>
  }
}

export default CS;