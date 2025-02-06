import Image from "next/image";
import React from "react";
import Button from "./frontend/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[60vh] sm:h-[88vh] bg-[#090c22] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[80%] mx-auto gap-[2rem]">
        <div className="mt-[2rem] sm:mt-0">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[2rem] sm:leading-[4rem] text-white">
            Sell Your Nfts & Earn Money
          </h1>
          <p className="mt-[1rem] text-white opacity-80 text-[15px] md:text-[17px] text-justify">
            In the ever-evolving digital economy, NFTs (Non-Fungible Tokens)
            offer a groundbreaking way to monetize your creativity. Whether
            you're an artist, musician, game developer, or digital creator,
            selling NFTs allows you to reach a global audience and earn money
            from your unique digital assets.
          </p>
          <Button title="Get Started" />
        </div>
        <div className="hidden sm:block sm:auto lg:mx-0">
          <Image
            src={"/images/hero.png"}
            alt="hero"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
