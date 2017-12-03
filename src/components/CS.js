import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import { mobile, desktop } from '../utils/responsive';
import csdata from '../data/cs-data';

const Container = styled.div`
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  animation: fade 0.6s;
  -moz-animation: fade 0.6s;
  -webkit-animation: fade 0.6s;
  ${mobile} {
    margin: 0 15px;
  }
  ${desktop} {
    width: 60%;    
  }
`;

const QuestionChevron = styled.i`
  margin-right: 5px;
  font-size: 0.8em !important;
  transform: rotate(${props => (props.expand ? '90deg' : '0deg')});
  transition: transform 0.1s ease;
`;

const QuestionTitle = styled.h4`
  cursor: pointer;
  margin-top: 20px !important;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const QuestionContent = styled.div`
  ${props => (props.expand ? '' : 'display: none;')};
`;

class CS extends React.PureComponent {
  state = {
    expand: [],
    // expand: JSON.parse(window.localStorage.getItem('expand')) || [],  // to use with localStorage
  };

  handleClick = e => {
    let expand = this.state.expand;
    if (e.target.id && String(e.target.id).charAt(0) === 'q') {
      expand[parseInt(e.target.id.slice(1), 10)] = expand[parseInt(e.target.id.slice(1), 10)] ? false : true;
      // why the heck does this line make it work
      expand = [...expand];
      this.setState({ expand });
      // window.localStorage.setItem('expand', JSON.stringify(expand));   // to use with localStorage
    }
  };

  render() {
    let questions = csdata.map((question, i) => {
      return (
        <div key={i}>
          <QuestionTitle id={`q${i}`}>
            <QuestionChevron className="fa fa-chevron-right" id={`q${i}`} expand={this.state.expand[i]} />
            {question.title}
          </QuestionTitle>
          <QuestionContent expand={this.state.expand[i]}>
            <p>{question.text}</p>
            {/* <iframe
            width="100%"
            height="300"
            src="//jsfiddle.net/andrewheekin/5bhf14ko/embedded/js,html,css,result/dark/"
            allowfullscreen="allowfullscreen"
            frameborder="0"
          /> */}
            <SyntaxHighlighter language="javascript" style={okaidia}>
              {question.code}
            </SyntaxHighlighter>
          </QuestionContent>
        </div>
      );
    });
    return <Container onClick={this.handleClick}>{questions}</Container>;
  }
}

export default CS;
