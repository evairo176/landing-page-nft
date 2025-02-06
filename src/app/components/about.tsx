import Image from "next/image";
import React from "react";
import Button from "./frontend/button";
import HeadingMini from "./frontend/heading-mini";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="w-[80%] mx-auto grid grid-cols-1  items-center xl:grid-cols-2 gap-[3rem]">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:w-[500px] md:h-[600px] w-[80%] h-[80%] border-[3px] flex items-center justify-center
         border-gray-400 rounded-lg"
        >
          <Image
            src={"/images/about.jpg"}
            alt="about"
            height={500}
            width={500}
            className="-rotate-12 rounded-lg"
          />
        </div>
        <div>
          <HeadingMini title="About Us" borderColor="before:bg-yellow-300" />
          <h1 className="heading__primary">
            Discover More{" "}
            <span className="text-yellow-300">Collect and Sell</span> Rare NFTs
          </h1>
          <h1 className="heading__primary"></h1>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80 text-justify">
            Step into the world of rare and exclusive digital assets! Explore a
            vast collection of unique NFTs, from digital art and music to
            virtual real estate and gaming items. Whether you're a passionate
            collector or an investor, finding and owning rare NFTs can unlock
            exciting opportunities.
          </p>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80 text-justify">
            Buy, sell, and trade valuable NFTs on top marketplaces, ensuring
            authenticity and secure transactions through blockchain technology.
            Build your collection, support your favorite creators, and profit
            from the growing NFT ecosystem. Start discovering, collecting, and
            selling rare NFTs today! 🚀
          </p>
          <Button title="Read More" />
        </div>
      </div>
    </div>
  );
};

export default About;
