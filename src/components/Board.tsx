import React from "react";

export default function Board() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="grid grid-cols-3 w-1/3">
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          1
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          2
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          3
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          4
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          5
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          6
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          7
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          8
        </button>
        <button className="bg-white rounded-lg text-black py-1 px-4 m-1.5">
          9
        </button>
      </div>
    </div>
  );
}
