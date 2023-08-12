"use client";
import React from "react";
import { useState } from "react";

function Square({ value }: any) {
  // const [value, setValue] = useState("");

  // function handleClick() {
  //   setValue("X");
  // }
  return (
    <div>
      <button
        className="bg-white rounded-lg text-black py-1 px-2 m-0.5 w-12 h-12"
        // onClick={handleClick}
      >
        {value}
      </button>
    </div>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(""));

  const buttons = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="grid grid-cols-3 w-1/3">
        {buttons.map((index) => (
          <div key={index}>
            <Square value={square[index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
