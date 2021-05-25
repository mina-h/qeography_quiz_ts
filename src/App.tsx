import React, { useState } from 'react';
import './App.css';

// components 
import InputForm from './components/InputForm';
import QuestionCard from './components/QuestionCard';

// helper functions
import { sendContinentAndGetQuestions } from './API';
import { Question } from './utils';





const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [gameOn, setGameOn] = useState(false);
  const [points, setPoints] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [start, setStart] = useState(true);



  const startQuiz = async (continent: string) => {
    // console.log(continent);
    setLoading(true);
    const data = await sendContinentAndGetQuestions(continent);
    console.log(data);
    setQuestions(data);
    setLoading(false);
    setGameOn(true);
    setStart(false);
    setGameOver(false);
    setPoints(0);
    // console.log(questions);
  }

  const checkAnswerAndSetPoints = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisableButton(true);
    const answer = event.currentTarget.value;
    if (questions[number -1].currectAnswer === answer) {
        setPoints(prev => prev + 1);
    } else {
      setPoints(prev => prev);
    }
  }

  const nextQuestion = () => {
   setNumber(prev => prev + 1);
   setDisableButton(false);

   if (number + 1 > questions.length){
    setGameOver(true);
    setStart(true);
    setQuestions([]);
    setNumber(1);
    setGameOn(false);
   }
  }



  return (
    <div className="App">
      {start && <InputForm startQuiz={startQuiz}/>}
      {loading && <p className="loading">loading...</p>}
      {!loading && gameOn && <QuestionCard questions={questions[number - 1]} setPoints={checkAnswerAndSetPoints}
        disable={disableButton}/>}
      {gameOn && !gameOver && 
      <div className="footer">
        <p className="points">points: {points}</p>
        <button className="next" onClick={nextQuestion}>Next Question</button>
        </div>}
      {gameOver && start && !gameOn && <p className="gameover">Game Over, points: {points}</p>}
    </div>
  );
}

export default App;
