import Board from './Board';
import Info from './Info';
import Header from './Header';
import { useState } from 'react';
import "./index.css"
import confetti from 'canvas-confetti'

function App() {

  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    setReset(true);
  }

  return (
    <div className="App">

      <Header />

      <div className='button-container'>
        <button className='button' onClick={() => resetBoard()}>
          Reset Board
        </button>
      </div>
      <div classname='winner'>
        <div className='winner-text'>{winner}</div>
      </div>
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
      <Info />
    </div>
  );
}

export default App;
