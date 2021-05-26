import React from 'react';

class TopRatedQuestions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h3 id='Top-Rated-Questions-Heading' className='metrics-heading'>Top Rated Questions</h3>
        <div className='top-rated-questions'>
          {this.props.questions.map((question, index) =>
            <div className='cm-top-rated-question' key={index}>
              <span className='cm-rankNum'>0{index+1}</span> &nbsp;&nbsp;&nbsp;
              <span className='cm-top-username'>{question.profilename}</span>
              <span className='cm-question-body'>Q: {question.questionbody}</span>
              <span className='cm-question-upvotes'>Upvotes: {question.upvotes}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default TopRatedQuestions;