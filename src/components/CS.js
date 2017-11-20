import React from 'react';
import styled from 'styled-components';
import { mobile, desktop } from '../utils/responsive';

const Container = styled.div`
  animation: fade .6s;
  -moz-animation: fade .6s;
  -webkit-animation: fade .6s;
  ${mobile} {
    margin: 0 15px
  }  
`;

class CS extends React.PureComponent {
  
  render() {
    return <Container>sup</Container>
  }
}

export default CS;