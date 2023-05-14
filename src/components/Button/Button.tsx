import React, { FC } from "react";

import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  extraClassName?: string;
  onClick?: (state: boolean) => void;
}

const Button: FC<ButtonProps> = ({ children, extraClassName, onClick }) => {
  return (
    <button
      onClick={onClick && (() => onClick(true))}
      className={`btn ${extraClassName ? extraClassName : ""}`}>
      {children}
    </button>
  );
};

export default Button;
