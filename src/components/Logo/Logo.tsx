import React from "react";
import logoIMG from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="#hero" className="logo">
      <img src={logoIMG} alt="logo" />
    </a>
  );
};

export default Logo;
