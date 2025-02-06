import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="h-[12vh] bg-[#111D5e]">
      <div className="w-[90%] flex items-center h-[100%] justify-between mx-auto">
        <h1 className="text-[20px] sm:text-[30px] text-white">
          Nf <span>ty</span>y
        </h1>
      </div>
    </div>
  );
};

export default Nav;
