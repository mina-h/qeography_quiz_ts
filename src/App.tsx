import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import { sendContinentAndGetQuestions } from './API';




const App = () => {
  const [questions, setQuestions] = useState([]);

  const startQuiz = async (continent: string) => {
    console.log(continent);
    const data = await sendContinentAndGetQuestions(continent);
    setQuestions(data);
  }


  return (
    <div className="App">
      <InputForm startQuiz={startQuiz}/>
    </div>
  );
}

export default App;
