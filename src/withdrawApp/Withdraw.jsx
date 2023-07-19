import React, { useState } from 'react';
import './Withdraw.css'



const CashWithdrawalApp = () => {
  const [balance, setBalance] = useState(2000);
  const [message, setMessage] = useState('');

  const handleWithdrawal = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
      setMessage(`Successfully withdrawn ₹${amount}`);
    } else {
      setMessage('Insufficient balance');
    }
  };

  return (
    <div>
        <div className='card bg-primary w-50 card2 px-5'>
          <div className='d-flex flex-row'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--mmPHnesazs3BnusJhNOA373KLqzyGWRY9PKmEqnsM-_EYZxhe8i59y2KqVmPMXpz6k&usqp=CAU" alt=""  width={100}/>
        <h1 className='text-white  ' style={{marginLeft:"30%"}}>Sarah Willians</h1>
        </div>

<div className='d-flex flex-row'>
       <h2>your balance  </h2>
       <span className='balance'>₹{balance}<small style={{fontSize:"14px"}}>in ruppes</small></span>
       </div>
      <div>
        <h2 className='text-white'>Withdrawal:</h2>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <div className='d-flex flex-row mx-5'>
        <button onClick={() => handleWithdrawal(100)} className='w-25 mx-4 bg-dark text-white'>₹100</button>
        <button onClick={() => handleWithdrawal(200)} className='w-25 mx-3 bg-dark text-white'>₹200</button>
        </div>
        <div className='d-flex flex-row mt-4 mx-5'>
        <button onClick={() => handleWithdrawal(500)} className='w-25 mx-4 bg-dark text-white'>₹500</button>
        <button onClick={() => handleWithdrawal(1000)} className='w-25 mx-3 bg-dark text-white'>₹1000</button>
        </div>
      </div>

      </div>
     
     
    </div>
  );
};

export default CashWithdrawalApp;