import React from "react";

type HeadingMiniProps = {
  title: string;
  borderColor?: string;
};

const HeadingMini = ({
  title,
  borderColor = "bg-blue-700",
}: HeadingMiniProps) => {
  return (
    <div className="relative flex">
      <p
        className={`heading__mini before:w-[70%] before:${borderColor} before:absolute before:-bottom-1 relative before:h-[4px]`}
      >
        {title}
      </p>
    </div>
  );
};

export default HeadingMini;
