"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftCard from "./nft-card";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
type Props = {};

const SaleSlider = (props: Props) => {
  return (
    <Carousel
      itemClass="item"
      responsive={responsive}
      infinite
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
    >
      <div>
        <NftCard
          aosType="zoom-in"
          like={20}
          image="/images/nft1.svg"
          title="Warrior"
          author="Dicki Prasetya"
          price={3.25}
          lastSale="10 Detik yang lalu"
        />
      </div>
      <div>
        <NftCard
          aosType="zoom-in"
          like={15}
          image="/images/nft2.svg"
          title="Meata Forted"
          author="Dicki Prasetya"
          price={4.25}
          lastSale="10 Menit yang lalu"
        />
      </div>
      <div>
        <NftCard
          aosType="zoom-in"
          like={9}
          image="/images/nft3.svg"
          title="Forted"
          author="Dicki Prasetya"
          price={5.25}
          lastSale="1 Jam yang lalu"
        />
      </div>
      <div>
        <NftCard
          aosType="zoom-in"
          like={3}
          image="/images/nft4.svg"
          title="Forted Eastern"
          author="Dicki Prasetya"
          price={7.25}
          lastSale="45 Menit yang lalu"
        />
      </div>
      <div>
        <NftCard
          aosType="zoom-in"
          like={11}
          image="/images/nft5.svg"
          title="Eastern"
          author="Dicki Prasetya"
          price={1.25}
          lastSale="3 Menit yang lalu"
        />
      </div>
      <div>
        <NftCard
          aosType="zoom-in"
          like={25}
          image="/images/nft6.svg"
          title="Eastern"
          author="Dicki Prasetya"
          price={1.45}
          lastSale="30 Menit yang lalu"
        />
      </div>
    </Carousel>
  );
};

export default SaleSlider;
