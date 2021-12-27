import React from "react";

export const ToggleOn = ({ on, toggle, children }) => {
  return on ? <div onClick={toggle}>{children}</div> : null;
};

export const ToggleOff = ({ on, toggle, children }) => {
  return on ? null : <div onClick={toggle}>{children}</div>;
};

export const Toggle = ({ on, onChange, children }) => {
  const toggle = () => {
    onChange();
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { on, toggle })
  );
};
