import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleButtonClick = () => {
    const newRandomNumber = generateRandomNumber(1, 100);
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      
      {/* task 1 */}
     

      <div className='container text-center p-5 card shadow mt-5 w-50'>
        <h1 className='headding text-primary'>Random Number</h1>
        <p>Generate a Random number in the <br />Range of 0 to 100</p>
        <div>
        <button onClick={handleButtonClick} className='w-25 bg-primary text-white'>Generate</button>
        </div>
        

        <h1>{randomNumber}</h1>

        

      </div>





    </div>
  );
};

export default RandomNumberGenerator;
