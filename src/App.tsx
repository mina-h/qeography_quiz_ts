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
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOn, setGameOn] = useState(false);

  const startQuiz = async (continent: string) => {
    // console.log(continent);
    setLoading(true);
    const data = await sendContinentAndGetQuestions(continent);
    console.log(data);
    setQuestions(data);
    setLoading(false);
    setGameOn(true);
    // console.log(questions);
  }


  return (
    <div className="App">
      <InputForm startQuiz={startQuiz}/>
      {loading && <p>loading...</p>}
      {!loading && gameOn && <QuestionCard questions={questions[number]}/>}
    </div>
  );
}

export default App;
