import React from "react";

const Square = ({ value, index, fun }) => {
  return (
    <div
      className=" bg-red-200 flex items-center justify-center border-2  font-bold text-2xl cursor-pointer "
      onClick={() => fun(index)}
    >
      {value}
    </div>
  );
};

export default Square;
