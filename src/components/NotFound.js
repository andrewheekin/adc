import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  text-align: center;
`;

export default () => (
  <NotFound>
    <h3>Sorry, page not found!</h3>
  </NotFound>
);
