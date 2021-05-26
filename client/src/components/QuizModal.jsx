import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizView from './QuizView';

function QuizModal(props) {
  const [start, changeStart] = useState(false);
  const [questionSets, updateSets] = useState([]);
  const [currentSet, changeSet] = useState({});

  const handleNext = (i) => {
    if (i < questionSets.length - 1) {
      changeSet(questionSets[i + 1]);
    }
  };
  const handlePrev = (i) => {
    if (i > 0) {
      changeSet(questionSets[i - 1]);
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

  const view = !start ? <button type="button" className="start-quiz" onClick={e => changeStart(!start)}>start quiz</button> : <QuizView set={currentSet} prev={handlePrev} next={handleNext} />;

  return (
    <div className="quiz">
      {view}
    </div>
  );
}

export default QuizModal;
