import { type } from 'os';
import React, { useState } from 'react';
// import { sendContinentAndGetQuestions } from '../API';

type Properties = {
  startQuiz(continent: string): void;
}

const InputForm:React.FC<Properties> = (props) => {
  const [continent, setContinent] = useState('');


  const handleInputChange = (event: React.FormEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setContinent(value);
  }

  const sendDataToApp = () => {
    props.startQuiz(continent);
  }


  return (
    <form className="input">
      <label className="input__label">Write Continet</label>
      <input className="input__text" type="text" value={continent} onChange={handleInputChange}></input>
      <button className="input__button" type="button" onClick={sendDataToApp}>Start Quiz</button>
    </form>
  )
}

export default InputForm;