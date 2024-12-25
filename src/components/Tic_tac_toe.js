import React from 'react';
import useTicTacToe from '../hooks/usetictactoe';

function Tic_tac_toe() {
  const { board, resetGame, getStatusMessage, handleClick } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        <h2>{getStatusMessage()}</h2>
        <button type="button" onClick={resetGame} className="reset">
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            disabled={b !== null}
            className="btn"
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tic_tac_toe;
