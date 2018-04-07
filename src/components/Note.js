import React, { Component } from 'react';
import { API, Storage } from 'aws-amplify';
import styled from 'styled-components';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import LoaderButton from '../components/LoaderButton';
import RichEditor from '../components/RichEditor';
import { s3Upload } from '../utils/awsLib';
import { mobile, desktop } from '../utils/responsive';

const Container = styled.div`
  font-size: 14px;
  // font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
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

const Options = styled.div`
  display: flex;
  margin: 5px 0 5px;
`;

const Edit = styled.div`
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Delete = styled.div`
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Saving = styled.div`
  margin-left: 5px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2em;
  color: black;
  &:focus {
    outline: none;
  }
`;

export default class Note extends Component {
  state = {
    saving: null,
    isDeleting: null,
    note: null,
    editorState: EditorState.createEmpty(),
    tag: 'New Note',
    attachmentURL: null,
    editing: false,
    file: null,
  };

  async componentDidMount() {
    try {
      let attachmentURL;
      const note = await API.get('notes', `/notes/${this.props.match.params.id}`);
      const { content, tag, attachment } = note;
      const editorState = content
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
        : EditorState.createEmpty();

      if (attachment) attachmentURL = await Storage.vault.get(attachment);
      this.setState({ note, tag, editorState, attachmentURL });
    } catch (e) {
      alert(e);
    }
  }

  formatFilename(str) {
    return str.length < 50 ? str : str.substr(0, 20) + '...' + str.substr(str.length - 20, str.length);
  }

  saveChange = debounce(async (tag, editorState) => {
    // EditorState.getCurrentContent() converts an EditorState to a ContentState
    // only stringify and convert to raw when saving to dynamo    
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    let attachment;

    if (this.state.file && this.state.file.size > process.env.REACT_APP_MAX_ATTACHMENT_SIZE)
      return alert('Please pick a file smaller than 5MB');

    this.setState({ saving: true });

    try {
      if (this.state.file) attachment = await s3Upload(this.state.file);
      await API.put('notes', `/notes/${this.props.match.params.id}`, {
        body: { tag, content, attachment: attachment || this.state.note.attachment },
      });
    } catch (e) {
      alert(e);
    } finally {
      this.setState({ saving: false });
    }
  }, 1000);

  updateEditorState = editorState => {
    this.saveChange(this.state.tag, editorState);
    this.setState({ editorState });
  };

  handleTagChange = event => {
    this.saveChange(event.target.value, this.state.editorState);
    this.setState({ tag: event.target.value });
  };

  handleFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  handleClickEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleDelete = async event => {
    event.preventDefault();

    const confirmed = window.confirm('Are you sure you want to delete this note?');

    if (!confirmed) return;
    this.setState({ isDeleting: true });

    try {
      await API.del('notes', `/notes/${this.props.match.params.id}`);
      this.props.history.push('/');
    } catch (e) {
      alert(e);
      this.setState({ isDeleting: false });
    }
  };

  render() {
    const { editing, editorState, saving } = this.state;
    return (
      <Container>
        {this.state.note && (
          <div>
            <Input type="text" value={this.state.tag} onChange={this.handleTagChange} readOnly={!editing} />
            <Options>
              <Edit onClick={this.handleClickEdit}>{editing ? 'done' : 'edit'}</Edit>|
              <Delete onClick={this.handleDelete}>{this.state.isDeleting ? 'deleting...' : 'delete'}</Delete>
              <Saving>{saving && 'SAVING'}</Saving>
            </Options>
            <FormGroup controlId="content">
              <RichEditor isReadOnly={!editing} editorState={editorState} updateEditorState={this.updateEditorState} />
            </FormGroup>
            {this.state.note.attachment && (
              <FormGroup>
                <ControlLabel>Attachment</ControlLabel>
                <FormControl.Static>
                  <a target="_blank" rel="noopener noreferrer" href={this.state.note.attachment}>
                    {this.formatFilename(this.state.note.attachment)}
                  </a>
                </FormControl.Static>
              </FormGroup>
            )}
            <FormGroup controlId="file">
              {!this.state.note.attachment && <ControlLabel>Attachment</ControlLabel>}
              <FormControl onChange={this.handleFileChange} type="file" />
            </FormGroup>
          </div>
        )}
      </Container>
    );
  }
}
