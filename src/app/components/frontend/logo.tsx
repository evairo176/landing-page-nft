import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

type LogoProps = {
  description?: string;
  phone?: string;
  email?: string;
};

const Logo = ({
  phone = "+62 81389003413",
  email = "info@gmail.com",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, natus. Corporis quisquam ducimus aut sunt deleniti accusantium",
}: LogoProps) => {
  return (
    <div>
      <h1 className="text-[20px] sm:text-[30px] text-white">
        Nf<span className="text-rose-300">tf</span>y
      </h1>
      {description && (
        <p className="text-[14px] text-white opacity-60 text-justify mt-[1rem]">
          {description}
        </p>
      )}
      {phone && (
        <div className="text-[14px] text-white opacity-60 text-justify mt-[0.7rem] flex items-center">
          <PhoneIcon className="w-4 h-4 mr-1" /> <span>{phone}</span>
        </div>
      )}
      {email && (
        <div className="text-[14px] text-white opacity-60 text-justify mt-[0.7rem] flex items-center">
          <EnvelopeIcon className="w-4 h-4 mr-1" /> <span>{email}</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
