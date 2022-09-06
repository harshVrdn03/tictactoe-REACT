import React from "react";
import { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  const [chances, setchances] = useState(1);
  const winningLogic = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of win) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[c] === state[a]) {
        return state[a];
      }
    }
    return false;
  };

  const clickHandler = (e) => {
    if (state[e] === null) {
      state[e] = isXturn ? "X" : "O";

      setXturn(!isXturn);
      const c = chances + 1;
      setchances(c);
      if (chances === 9) {
        setState(Array(9).fill(null));
        setchances(1);
      }
    }
  };
  const winner = winningLogic();
  const again = () => {
    setState(Array(9).fill(null));
    setchances(1);
  };
  return (
    <>
      {winner ? (
        <>
          <h1>{winner} 💖💖 winner</h1>

          <button
            onClick={again}
            className="bg-black m-5 p-3 text-white rounded-xl"
          >
            try again
          </button>
        </>
      ) : (
        <>
          <div className="bg-black m-5 p-3 text-white rounded">
            turn {isXturn ? "x" : "O"}
          </div>
          <div className=" h-96 w-96 grid grid-cols-3 border-2 rounded-md border-red-900 p-4 ">
            {state.map((value, index) => (
              <Square value={value} index={index} fun={clickHandler} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Board;
