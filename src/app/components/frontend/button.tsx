import { time } from "console";
import React from "react";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className="before:ease relative h-12 w-40 overflow-hidden bg-blue-700 text-white font-semibold
         shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
         before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#da5959] 
         before:transition-all before:duration-300 hover:text-white mt-[1.5rem] hover:before:-rotate-180"
    >
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
