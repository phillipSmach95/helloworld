import "./TicTacToe.css";
import { useState } from "react";

function Sqare({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <h1>TicTacToe</h1>
      <div className="status">{status}</div>
      <div>
        <div className="board-row"></div>
        <Sqare value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Sqare value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Sqare value={squares[2]} onSquareClick={() => handleClick(2)} />
        <div className="board-row"></div>
        <Sqare value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Sqare value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Sqare value={squares[5]} onSquareClick={() => handleClick(5)} />
        <div className="board-row"></div>
        <Sqare value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Sqare value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Sqare value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSqares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <>
        <li>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });
  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSqares} onPlay={handlePlay}></Board>
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(params) {
    
}