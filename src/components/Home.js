import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import projects from '../data/projects-details';

const Projects = styled.div`
  margin: 0;
  font-size: 14px;
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  width: 54%;  
`;

const Container = styled.div`
  border-bottom: 1px solid #eee;
`;

const ProjectTitle = styled.h1`
  font-weight:bold;
  margin-bottom: 25px;
  font-size: 2.2em;
  color:#555555;
  &:hover {
    color:#000000;
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ProjectText = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

const Date = styled.div`
  color: #bfbfbf;
  font-size: 1em;
  display: inline;
`;

const VerticalRule = styled.div`
  display: inline;
  border-left:1px solid #bfbfbf;
  margin: 0 15px 0 15px;
`;

const Author = styled.div`
  padding: 0 0 30px 0;
`;

const AuthorName = styled.div`
  color: #bfbfbf;
  font-size: 1.3em;
  display: inline;
`;

class Home extends React.PureComponent {
  render() {
    let projectDetails = projects.map((project) => {
      return (
        <Container key={project.url}>
          <ProjectLink to={project.url}>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectLink>
          <ProjectText>{project.description} <ProjectLink to={project.url}>>></ProjectLink></ProjectText>
          <Author>
            <AuthorName>{project.author}</AuthorName>
            <VerticalRule />
            <Date>{project.date}</Date>
          </Author>
        </Container>
      );
    })
    return <Projects>{projectDetails}</Projects>
  }
}

export default Home;