import React, { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";
import calculateWinner from "./calculateWinner";


function Game () {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
    col: null,
    row: null,
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  const current = history[stepNumber];
  const [winner, lines] = calculateWinner(current.squares)
  let status;


  function handleClick(i, currentSquares) {
    const squares = [...currentSquares]
    const [winner] = calculateWinner(squares)
   
    if(winner || squares[i]) {
        return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, ...[{
        squares: squares,
        col: (i % 3) + 1,
        row: Math.floor(i / 3) + 1,
    }]]);
    setStepNumber(history.length);
    setxIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setxIsNext((step % 2) === 0)
  }

  if(winner) {
      status = 'Winner is ' + winner
  } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          lines={lines}
          onClick={(i) => handleClick(i, current.squares)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step, move) => 
            <Moves key={move} step={step} move={move} isActive={move === stepNumber} jumpTo={() => jumpTo(move)} />
          )}
        </ol>
      </div>
    </div>
  )
}

export default Game;
