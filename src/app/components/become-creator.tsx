import React from "react";
import HeadingMini from "./frontend/heading-mini";
import {
  ChartPieIcon,
  IdentificationIcon,
  PresentationChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import BecomeCreatorCard from "./frontend/become-creator-card";

const BecomeCreator = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] bg-blue-900">
      <div className="flex items-center justify-center flex-col">
        <HeadingMini
          title="Become A Creator"
          borderColor="before:bg-yellow-300"
        />
        <h1 className="heading__primary">
          Create and <span className="text-yellow-300">Sell</span> Your NFTs
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <BecomeCreatorCard
          icon={RocketLaunchIcon}
          buttonTitle="Read More"
          title="Setup Your Wallet"
          description="Set up your digital wallet to securely buy, sell, and store NFTs
            with ease."
        />
        <BecomeCreatorCard
          delay="200"
          icon={ChartPieIcon}
          iconColor="text-green-300"
          buttonTitle="Read More"
          title="Setup Your Wallet"
          description="Set up your digital wallet to securely buy, sell, and store NFTs
            with ease."
        />
        <BecomeCreatorCard
          delay="400"
          icon={IdentificationIcon}
          iconColor="text-orange-300"
          buttonTitle="Read More"
          title="Setup Your Wallet"
          description="Set up your digital wallet to securely buy, sell, and store NFTs
            with ease."
        />
        <BecomeCreatorCard
          delay="600"
          iconColor="text-cyan-300"
          icon={PresentationChartBarIcon}
          buttonTitle="Read More"
          title="Setup Your Wallet"
          description="Set up your digital wallet to securely buy, sell, and store NFTs
            with ease."
        />
      </div>
    </div>
  );
};

export default BecomeCreator;
