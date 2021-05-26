import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizView from './QuizView';

function QuizModal(props) {
  const [start, changeStart] = useState(false);
  const [questionSets, updateSets] = useState([{
    questionId: 1,
    questionBody: 'Who invented Chips and Guac?',
    answer1: 'Pablo Escobar.',
    answer2: 'Lincoln',
    answer3: 'The guy down the street',
    answer4: 'Bob',
    correctAnswer: 1,
    relevance: 50,
    isReported: false,
  },
  {
    questionId: 2,
    questionBody: 'Dark Chocolate comes from what tree?',
    answer1: 'Oak Tree',
    answer2: 'Bonsai Tree',
    answer3: 'A tree',
    answer4: 'Cocao Tree',
    correctAnswer: 4,
    relevance: 50,
    isReported: false,
  },
  ]);
  const [currentSet, changeSet] = useState({});
  const [answers, updateAnswers] = useState({});

  const handleNext = (set) => {
    // console.log(typeof i);
    let currentIndex = -1;
    questionSets.forEach((question, i) => {
      if (JSON.stringify(question) === JSON.stringify(set)) {
        currentIndex = i;
      }
    });
    console.log(currentIndex);
    if (currentIndex < questionSets.length - 1) {
      changeSet(questionSets[currentIndex + 1]);
    }
  };
  const handlePrev = (set) => {
    let currentIndex = -1;
    questionSets.forEach((question, i) => {
      if (JSON.stringify(question) === JSON.stringify(set)) {
        currentIndex = i;
      }
    });
    console.log(currentIndex);

    if (currentIndex > 0) {
      changeSet(questionSets[currentIndex - 1]);
    }
  };

  useEffect(() => {
    axios.get('')
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.log(err));
    // use updateSets
  }, []);

  const view = !start ? <button type="button" className="start-quiz question-vote-choice" onClick={e => changeStart(!start)}>start quiz</button> : <QuizView set={currentSet} prev={handlePrev} next={handleNext} list={questionSets} answers={answers} />;

  return (
    <div className="popup">
      <div className="quiz">
        {view}
      </div>
    </div>
  );
}

export default QuizModal;
