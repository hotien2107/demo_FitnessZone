import React, { useState } from "react";

const colors = {
  green: { bg: "bg-green-500", fg: "text-white" },
  red: { bg: "bg-red-500", fg: "text-white" },
  gray: { bg: "transparent", fg: "text-gray-500" },
};

export const VideoNavBarIcon = ({
  type,
  size,
  onClick,
  className,
  children,
}) => {
  return React.Children.map(children, (child) => {
    const { bg, fg } = colors[type] ?? colors.gray;

    return (
      <div
        className={`${bg} ${fg} ${className} w-20 h-20 cursor-pointer flex justify-center items-center`}
      >
        {React.cloneElement(child, {
          size: size ?? 28,
          onClick,
        })}
      </div>
    );
  });
};
