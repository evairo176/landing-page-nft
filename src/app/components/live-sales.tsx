import React from "react";
import HeadingMini from "./frontend/heading-mini";
import SaleSlider from "./frontend/sale-slider";

type Props = {};

const LiveSales = (props: Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-900">
      <div className="flex items-center justify-center flex-col">
        <HeadingMini title="Sales" borderColor="before:bg-yellow-300" />
        <h1 className="heading__primary">
          Live <span className="text-yellow-300">Sales</span> NFT
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[5rem]">
        <SaleSlider />
      </div>
    </div>
  );
};

export default LiveSales;
