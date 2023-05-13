import React, { FC } from "react";
import logoIMG from "../../assets/images/logo.svg";

import "./Logo.scss";
interface LogoProps {
  extraClassName?: string;
}

const Logo: FC<LogoProps> = ({ extraClassName }) => {
  return (
    <a href="#hero" className={`logo ${extraClassName ? extraClassName : ""}`}>
      <img src={logoIMG} alt="logo" className="logo__image" />
    </a>
  );
};

export default Logo;
