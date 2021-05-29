import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizView from './QuizView';

function QuizModal({ bookid }) {

  const [start, changeStart] = useState(false);
  const [questionSets, updateSets] = useState([]);
  const [currentSet, changeSet] = useState({});
  const [answers, updateAnswers] = useState({});

  const handleNext = (set) => {
    let currentIndex = -1;
    questionSets.forEach((question, i) => {
      if (JSON.stringify(question) === JSON.stringify(set)) {
        currentIndex = i;
      }
    });
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
    if (currentIndex > 0) {
      changeSet(questionSets[currentIndex - 1]);
    }
  };

  useEffect(() => {
    axios.get(`/questions/book/${bookid}`)
      .then((data) => {
        updateSets(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const view = !start ? <button type="button" className="start-quiz question-vote-choice" onClick={e => changeStart(!start)}>start quiz</button> : <QuizView set={currentSet} prev={handlePrev} next={handleNext} list={questionSets} answers={answers} />;

  return (
    <>
      {view}
    </>
  );
}

export default QuizModal;
