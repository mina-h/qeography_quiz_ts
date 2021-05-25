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
    <form >
      <label>Write Continet</label>
      <input type="text" value={continent} onChange={handleInputChange}></input>
      <button type="button" onClick={sendDataToApp}>StartQuiz</button>
    </form>
  )
}

export default InputForm;