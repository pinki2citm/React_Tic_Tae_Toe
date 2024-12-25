import { useState } from "react";

const array = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(array());
  const [isXNext, setIsXNext] = useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner()) return; // Ignore if square is already filled or game has a winner

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner();
    if (winner) return `Winner: ${winner}`;
    if (board.every((square) => square !== null)) return "It's a draw!";
    return `Next Player: ${isXNext ? "X" : "O"}`;
  };

  const resetGame = () => {
    setBoard(array());
    setIsXNext(true);
  };

  return { board, resetGame, getStatusMessage,  handleClick };
};

export default useTicTacToe;
