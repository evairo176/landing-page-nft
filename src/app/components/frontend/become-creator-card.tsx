import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import React from "react";

type BecomeCreatorCardProps = {
  title: string;
  description: string;
  buttonTitle: string;
  icon: any;
  iconColor?: string;
  delay?: string;
};

const BecomeCreatorCard = ({
  title,
  description,
  buttonTitle,
  icon,
  iconColor = "text-yellow-300",
  delay = "",
}: BecomeCreatorCardProps) => {
  const Icon = icon;
  return (
    <div
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      data-aos-delay={`${delay}`}
      className="bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10
   rounded-md p-4"
    >
      <Icon className={`w-[4rem] h-[4rem] mt-[1.4rem] ${iconColor}`} />
      <h1 className="mt-[1rem] text-[20px] text-white">{title}</h1>
      <p className="mt-[1rem] text-[15px] text-white opacity-85">
        {description}
      </p>
      <button className="mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline">
        {buttonTitle}
      </button>
    </div>
  );
};

export default BecomeCreatorCard;
