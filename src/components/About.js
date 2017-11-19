import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  animation: fade .6s;
  -moz-animation: fade .6s;
  -webkit-animation: fade .6s;
`;

const Section = styled.div`
  padding: 0 0 10px 0;
`;

const About = () =>
  <Container>
    <Section>
      <h4>About</h4>
      <p>I'm a software engineer in the Washington, DC area</p>
    </Section>
    <Section>
      <h4>Currently</h4>
      <p>I'm a software engineer at <a href="https://rizemoney.com">Rize</a></p>
    </Section>  
    <Section>
      <h4>Past</h4>
      <p>Software engineer at <a href="http://streetshares.com">StreetShares</a>, building loan underwriting software</p>
      <p>Software engineer at Booz Allen, developing and maintaining <a href="https://www.disasterassistance.gov/">DisasterAssistance.gov</a></p>
    </Section>
    <Section>
      <h4>Technologies</h4>
      <p>Javascript, HTML, CSS, Python, Linux, Mongodb, Postgres, Mysql, Serverless</p>          
    </Section>      
    <Section>
      <h4>School</h4>
      <p>BS, Systems Engineering, University of Virginia '14</p>
    </Section>
  </Container>

export default About;