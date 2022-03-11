import React from "react";
import Board from "./Board";
import Moves from "./Moves";
import calculateWinner from "./calculateWinner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        col: null,
        row: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i, current) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const squares = current.squares.slice()
    const [winner] = calculateWinner(squares)
   
    if(winner || squares[i]) {
        return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        history: history.concat([{
          squares: squares,
          col: (i % 3) + 1,
          row: Math.floor(i / 3) + 1,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber];
    const [winner, lines] = calculateWinner(current.squares)
    let status;

    if(winner) {
        status = 'Winner is ' + winner
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            lines={lines}
            onClick={(i) => this.handleClick(i, current)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {history.map((step, move) => 
              <Moves key={move} step={step} move={move} isActive={move === this.state.stepNumber} jumpTo={() => this.jumpTo(move)} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Game;
