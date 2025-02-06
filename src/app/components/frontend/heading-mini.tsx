import React from "react";

type HeadingMiniProps = {
  title: string;
  borderColor?: string;
};

const HeadingMini = ({
  title,
  borderColor = "before:bg-blue-700",
}: HeadingMiniProps) => {
  return (
    <div className="relative flex">
      <p
        className={`heading__mini before:w-[70%] ${borderColor} before:absolute before:-bottom-1 relative before:h-[4px]`}
      >
        {title}
      </p>
    </div>
  );
};

export default HeadingMini;
