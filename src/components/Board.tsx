"use client";
import React from "react";
import { useState } from "react";

function Square({ value, onSquareClick }: any) {
  // const [value, setValue] = useState("");

  // function handleClick() {
  //   setValue("X");
  // }
  return (
    <div>
      <button
        className="bg-white rounded-lg text-black py-1 px-2 m-0.5 w-12 h-12"
        // onClick={handleClick}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isNext, setIsNext] = useState(true);

  const buttons = Array.from({ length: 9 }, (_, index) => index + 1);

  function handleClick(i: number) {
    if (square[i] || calculateWinner(square)) {
      return;
    }

    //
    const nextSquare = square.slice();
    // nextSquare[i] = "X";
    isNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    setSquare(nextSquare);

    setIsNext(!isNext);
  }

  //calculate a winner

  function calculateWinner(square: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }

    return null;
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div>{status}</div>
      <div className="grid grid-cols-3 w-1/3">
        {buttons.map((index) => (
          <div key={index}>
            <Square
              value={square[index - 1]}
              onSquareClick={() => handleClick(index - 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
