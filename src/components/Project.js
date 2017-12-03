import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import projects from '../data/projects-data';
import { mobile, desktop } from '../utils/responsive';

const Projects = styled.div`
  font-size: 14px;
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  animation: fade 0.6s;
  -webkit-animation: fade 0.6s;
  -moz-animation: fade 0.6s;  
  ${desktop} {
    width: 60%;
    margin: 0;    
  }
  ${mobile} {
    margin: 0 15px
  }  
`;

const ProjectTitle = styled.h1`
  font-weight: bold;
  margin: 20px 0 25px 0;
  font-size: 2.2em;
  color:#555555;
  &:hover {
    color:#000000;
  }
`;

const ProjectText = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

class Project extends React.PureComponent {
  render() {
    let name = this.props.match.params.project.replace(/-/g, '');  // remove dashes from route param
    let projectInfo = projects[name].map((x, i) => {
      switch (x[0]) {
        case 'h1':
          return <ProjectTitle key={i}>{x[1]}</ProjectTitle>;
        case 'p':
          return <ProjectText key={i}>{x[1]}</ProjectText>;
        case 'a':
          return <div key={i}><a href={x[1]}>{x[2]}</a><br/></div>;
        case 'code':
          return (
            <SyntaxHighlighter language="javascript" key={i} style={okaidia}>            
              {x[1]}
            </SyntaxHighlighter>
          )
        default:
          return null;
      }
    })
    return <Projects>{projectInfo}</Projects>
  }
}

export default Project;