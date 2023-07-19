import logo from './logo.svg';
import './App.css';

import Random from './Random Number/Random'
import Destination from './Destination Search/Destination'

import Google from './Search/Google'
import Count from './count/count'
import ClickCounter from './clickcounter/click'



import Withdraw from './withdrawApp/Withdraw'

import Todos from './Todos/tods'

function App() {
  return (
    <div className="App">

      <Random /><br></br>
      {/* <Destination /><br></br> */}
      <Todos />
      <Withdraw />
      <Google />
      <Count />
      <ClickCounter  />

      
      
    </div>
  );
}

export default App;
