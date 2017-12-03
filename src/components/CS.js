import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import { mobile, desktop } from '../utils/responsive';

const Container = styled.div`
  font-family: 'avenir', 'avenir next', helvetica, arial, sans-serif;
  animation: fade 0.6s;
  -moz-animation: fade 0.6s;
  -webkit-animation: fade 0.6s;
  ${mobile} {
    margin: 0 15px;
  }
`;

const QuestionChevron = styled.i`
  margin-right: 5px;
  font-size: 0.8em !important;
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

class CS extends React.PureComponent {
  state = {
    chevronStyle: { transform: 'rotate(0deg)' },
  };

  handleQuestionClick = e => {
    // this.setState({chevronStyle: {transform: "rotate(90deg)"}});
    e.target.style;
    console.log(e.target);
    console.log(this.refs);
    // this.refs.q1.props.style.transform
  };

  render() {
    let { chevronStyle } = this.state;
    return (
      <Container>
        <div className="question">
          <QuestionTitle onClick={this.handleQuestionClick}>
            <QuestionChevron style={chevronStyle} className="fa fa-chevron-right" ref="q1" />JS: Numbers
          </QuestionTitle>
          <div className="question-content">
            <p>Hola</p>
            {/* <iframe
              width="100%"
              height="300"
              src="//jsfiddle.net/andrewheekin/5bhf14ko/embedded/js,html,css,result/dark/"
              allowfullscreen="allowfullscreen"
              frameborder="0"
            /> */}
            <SyntaxHighlighter language="javascript" style={okaidia}>{`
// populate an array of functions using let in the for loop
var a = [];
for (let i = 0; i < 5; i++) {
  a.push(function() { return i });
}

// call the functions stored in the array
a.map(function(f) { return f() }); // outputs [0, 1, 2, 3, 4]
          `}</SyntaxHighlighter>
          </div>
        </div>
      </Container>
    );
  }
}

export default CS;
