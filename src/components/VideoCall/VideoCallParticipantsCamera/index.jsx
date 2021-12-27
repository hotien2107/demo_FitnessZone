import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import React from "react";

export const VideoCallSmallCamera = ({ img, className, ...rest }) => {
  return (
    <img
      className={`object-cover w-36 h-52 rounded-xl ${className}`}
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
  const isPrivateCall = children.length === 1;
  const clazz = isPrivateCall
    ? "flex justify-end mr-5 rounded-xl"
    : "flex flex-row gap-5 justify-center align-center items-center";

  const renderPrivateCall = () => {
    return (
      <div className={`${clazz} ${className}`} {...rest}>
        {children}
      </div>
    );
  };

  const renderGroupCall = () => {
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
  return isPrivateCall ? renderPrivateCall() : renderGroupCall();
};
