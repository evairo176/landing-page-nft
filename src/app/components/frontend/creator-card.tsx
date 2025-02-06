import Image from "next/image";
import React from "react";

type CreatorCardProps = {
  image: string;
  user: string;
  price: number;
  delay?: string;
  aosType?: string;
};

const CreatorCard = ({
  image,
  user,
  price,
  delay,
  aosType = "zoom-in",
}: CreatorCardProps) => {
  return (
    <div
      data-aos-delay={`${delay}`}
      data-aos={`${aosType}`}
      data-aos-anchor-placement="top-center"
      className="text-center"
    >
      <div className="">
        <Image
          src={image}
          alt={user}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <h1 className="text-[25px] text-white mt-[1.5rem] line-clamp-1">
        {user}
      </h1>
      <div className="flex items-center justify-center gap-2">
        <p className="text-yellow-400">{price} </p>

        <Image
          src={"/logo/sol-icon.svg"}
          alt="solana"
          width={100}
          height={100}
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default CreatorCard;
