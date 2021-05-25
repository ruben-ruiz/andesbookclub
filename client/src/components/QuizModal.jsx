import React from 'react';

function QuizModal() {
  return (
    <div className="quiz">
      <p className="quiz-question">Question: Who invented Guac?</p>

      <form className="answers" onSubmit={(e) => { }}>
        <button type="button" className="quiz-answer">Answer 1</button>
        <button type="button" className="quiz-answer">Answer 2</button>
        <button type="button" className="quiz-answer">Answer 3</button>
        <button type="button" className="quiz-answer">Answer 4</button>
      </form>

      <div>
        <button type="button">Previous</button>
        <button type="button">Next</button>
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

export default QuizModal;
