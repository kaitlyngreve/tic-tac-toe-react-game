import Board from './Board';
import Info from './Info';
import { useState } from 'react';

function App() {

  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    setReset(true);
  }

  return (
    <div className="App">
      <button onClick={() => resetBoard()}>
        Reset Board
      </button>

      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default App;
