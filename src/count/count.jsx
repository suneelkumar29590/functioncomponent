import React, { useState } from 'react';
import './count.css'

const LettersCalculator = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setCount(newText.length);
  };

  return (
    <div className='d-flex flex-row card2 w-75 bg-success'>
        <div className='' style={{margin:"10%",padding:"10%"}} >
      <h1 className='text-white' >Calculate the <br />Letters you <br />enter</h1>
      <p className='text-white'>Enter the phrase</p>
      <input value={text} onChange={handleTextChange}  className='input45'/><br /><br />
      <button className='countbtn' >No.of Letters: {count}</button>
      </div>
      <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg?w=2000" className='image32' alt="" />
    </div>
  );
};

export default LettersCalculator;