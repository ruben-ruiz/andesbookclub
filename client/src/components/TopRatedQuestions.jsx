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
          {questions.map((question, index) =>
            <div>
              <span className='rankNum'>0{index+1}</span> {question.createdBy} Q: {question.questionBody} Upvotes: {question.upvotes}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TopRatedQuestions;