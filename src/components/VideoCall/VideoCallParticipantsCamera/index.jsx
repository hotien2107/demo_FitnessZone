import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import React from "react";

export const VideoCallSmallCamera = ({ img, className, ...rest }) => {
  return (
    <img
      className={`object-cover rounded-sm ${className}`}
      src={img}
      {...rest}
    />
  );
};

export const VideoCallParticipantsCamera = ({
  className,
  children,
  ...rest
}) => {
  const clazz =
    children.length > 1
      ? "flex flex-row gap-5 justify-center align-center items-center"
      : "flex justify-end";

  return (
    <div className={`${clazz} ${className}`} {...rest}>
      <BsFillCaretLeftFill
        className="p-2 bg-white rounded-full cursor-pointer"
        size={30}
      />

      {React.Children.map(children, (child) => React.cloneElement(child))}

      <BsFillCaretRightFill
        className="p-2 bg-white rounded-full cursor-pointer"
        size={30}
      />
    </div>
  );
};
