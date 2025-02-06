import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[60vh] sm:h-[88vh] bg-[#090c22] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[80%] mx-auto gap-[2rem]">
        <div className="mt-[2rem] sm:mt-0">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[2rem] sm:leading-[4rem] text-white">
            Sell Your Nfts & Earn Money
          </h1>
          <p className="mt-[1rem] text-white opacity-80 text-[15px] md:text-[17px]">
            In the ever-evolving digital economy, NFTs (Non-Fungible Tokens)
            offer a groundbreaking way to monetize your creativity. Whether
            you're an artist, musician, game developer, or digital creator,
            selling NFTs allows you to reach a global audience and earn money
            from your unique digital assets.
          </p>
          <button
            className="before:ease relative h-12 w-40 overflow-hidden bg-blue-700 text-white font-semibold
         shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
         before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#da5959] 
         before:transition-all before:duration-300 hover:text-white mt-[1.5rem] hover:before:-rotate-180"
          >
            <span className="relative z-10">Get Started</span>
          </button>
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
