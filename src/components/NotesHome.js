import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { checkAuth } from '../utils/awsLib';
import { mobile, desktop } from '../utils/responsive';

const Container = styled.div`
  padding: 80px 0;
  text-align: center;
`;

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
    margin: 0 15px;
  }
`;

const Section = styled.div`
  padding: 0 0 15px;
`;

const ProjectTitle = styled.div`
  font-weight: bold;
  margin: 0 6px 0 0;
  font-size: 1.1em;
  color: #555555;
  &:hover {
    color: #000000;
  }
`;

const ProjectText = styled.div`
  display: flex;
  font-size: 1em;
  line-height: 1em;
`;

const Created = styled.div`
  color: #bfbfbf;
  font-size: 0.9em;
`;

const New = styled.div`
  font-size: 1.1em;
  margin-top: 3px;
`;

export default class NotesHome extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false,
    notes: [],
  };

  async componentDidMount() {
    if (!await checkAuth()) return;
    await this.setState({ isAuthenticated: true });

    await this.fetchNotes();
    this.setState({ isLoading: false });
  }

  fetchNotes = async () => {
    try {
      const results = await API.get('notes', '/notes');
      this.setState({ notes: results });
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.error('NotesHome fetchNotes Error:', e);
    }
  };

  handleNoteClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  };

  renderLander() {
    return (
      <Container>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </Container>
    );
  }

  renderNote(note) {
    // TODO: find a cleaner more efficient way to return the first 120 chars
    // (maybe just take one block then max 2 if first is < 120 chars)
    const blocks = JSON.parse(note.content).blocks.slice(0, 2);
    const preview = blocks.reduce((x, y) => {
      if (x.length < 120) return `${x} ${y.text.trim()}`;
      else return x;
    }, '');
    const date = new Date(note.createdAt).toLocaleString();
    return (
      <Section key={note.noteId} href={`/notes/${note.noteId}`} onClick={this.handleNoteClick}>
        <ProjectText>
          <ProjectTitle>{note.tag}</ProjectTitle>- {preview}
        </ProjectText>
        <Created>created {date}</Created>
      </Section>
    );
  }

  render() {
    return (
      <Projects>
        {this.state.isAuthenticated ? (
          <div>
            <div>{!this.state.isLoading && this.state.notes.map(note => this.renderNote(note))}</div>
            <New>
              <a href="/notes/new" onClick={this.handleNoteClick}>
                <b>{'\uFF0B'}</b> Create a new note
              </a>
            </New>
          </div>
        ) : (
          this.renderLander()
        )}
      </Projects>
    );
  }
}
