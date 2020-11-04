import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Board } from './components/Board/Board';
import { StartGame } from './components/StartGame/StartGame';
import { getBoard } from './redux/rootReducer';

function App() {
  const board = useSelector(getBoard);
  return (
    <div className="App">
      {board.length === 0 && (
        <StartGame />
      )}
      {board.length > 0 && (
        <Board />
      )}
    </div>
  );
}

export default App;
