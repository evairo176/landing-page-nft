import React from "react";
import HeadingMini from "./frontend/heading-mini";
import NftCard from "./frontend/nft-card";

type Props = {};

const PopularNft = (props: Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="flex items-center justify-center flex-col">
        <HeadingMini title="Popular Item" borderColor="before:bg-yellow-300" />
        <h1 className="heading__primary">
          Explore <span className="text-yellow-300">Popular</span> NFTs
        </h1>
      </div>
      <div className="w-[80%] pt-[5rem] mx-auto grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
        <NftCard
          like={20}
          image="/images/nft1.svg"
          title="Warrior"
          author="Dicki Prasetya"
          price={3.25}
        />
        <NftCard
          delay="100"
          like={15}
          image="/images/nft2.svg"
          title="Meata Forted"
          author="Dicki Prasetya"
          price={4.25}
        />
        <NftCard
          delay="200"
          like={9}
          image="/images/nft3.svg"
          title="Forted"
          author="Dicki Prasetya"
          price={5.25}
        />
        <NftCard
          delay="300"
          like={3}
          image="/images/nft4.svg"
          title="Forted Eastern"
          author="Dicki Prasetya"
          price={7.25}
        />
        <NftCard
          delay="400"
          like={11}
          image="/images/nft5.svg"
          title="Eastern"
          author="Dicki Prasetya"
          price={1.25}
        />
        <NftCard
          delay="500"
          like={25}
          image="/images/nft6.svg"
          title="Eastern"
          author="Dicki Prasetya"
          price={1.45}
        />
      </div>
    </div>
  );
};

export default PopularNft;
