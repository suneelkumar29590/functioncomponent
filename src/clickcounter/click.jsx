import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='text-center mt-5 bg-warning'>
      <h1>The button has been clicked<br></br><span className='text-danger'> {count}</span>times </h1>
      <p>click the button to increase the count!</p>
      <button onClick={handleClick} className='bg-primary'>Click Me</button>
      {/* changes */}
     
    </div>
  );
};

export default ClickCounter;
