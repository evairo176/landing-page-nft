import { HeartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type NftCardProps = {
  image: string;
  title: string;
  author: string;
  price: number;
  like: number;
  lastSale?: string;
  delay?: string;
  aosType?: string;
};

const NftCard = ({
  image,
  title,
  author,
  price,
  like,
  lastSale,
}: NftCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="p-4 m-2 bg-white rounded-lg bg-opacity-15 relative"
    >
      <div className="absolute top-0 right-0 flex items-center justify-center">
        <span className="absolute text-white text-[14px] opacity-50">
          {like}
        </span>
        <HeartIcon className="w-12 h-12 text-red-400" />
      </div>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="mx-auto rounded-lg"
      />
      <h1 className="mt-[1.5rem] text-white text-[25px]">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="mt-[0.2rem] text-[15px] text-yellow-300">@{author}</p>
        <p className="mt-[0.2rem] text-[13px] text-white opacity-70">
          {lastSale}
        </p>
      </div>
      <div className="mt-[1.5rem] flex items-center justify-between">
        <button className="px-6 py-3 bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black">
          Buy Nft
        </button>
        <div className="flex items-center gap-2">
          <p className="text-[18px] text-white">{price}</p>
          <Image
            src={"/logo/sol-icon.svg"}
            alt="solana"
            width={100}
            height={100}
            className="w-4 h-4"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NftCard;
