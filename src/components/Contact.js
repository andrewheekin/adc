import React from 'react';
import styled from 'styled-components';
import { mobile, desktop } from '../utils/responsive';

const Container = styled.div`
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  animation: fade .6s;
  -moz-animation: fade .6s;
  -webkit-animation: fade .6s;
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
  ${mobile} {
    text-align: center;
  }  
`;

const Contact = () => (
  <Container>
    <ul>
      <li>
        <h4>
          <a href="mailto:andrewheekin@gmail.com">andrewheekin@gmail.com</a>
        </h4>
      </li>
      <li>
        <h4>
          <a href="https://github.com/andrewheekin">Github</a>
        </h4>
      </li>
      <li>
        <h4>
          <a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465">Linkedin</a>
        </h4>
      </li>
      <li>
        <h4>
          <a href="https://twitter.com/andrewheekin">Twitter</a>
        </h4>
      </li>
    </ul>
  </Container>
);

export default Contact;
