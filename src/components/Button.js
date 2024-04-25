import React from "react";

const Button = ({ click, text }) => {
  return (
    <>
      <div
        className="w-[15%] bg-[#00BFB2] rounded-xl text-white p-3 flex items-center justify-center h-[61.6px]"
        onClick={click}
      >
        {text}
      </div>
    </>
  );
};

export default Button;
