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
              <div className='cm-rankNum'>0{index+1}</div> &nbsp;&nbsp;&nbsp;
              <div className='cm-top-username'>{question.profilename}</div>
              <div className='cm-question-body'>Q: {question.questionbody}</div>
              <div className='cm-question-upvotes'>Upvotes: {question.upvotes}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default TopRatedQuestions;
