import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../components/Logo/Logo";
import { menuItems } from "../../constants/constants";

import "./Header.scss";

const Header: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="menu">
            <ul className="menu__list">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`menu__list-item ${
                    activeIndex === index && "menu__list-item--active"
                  }`}
                  onClick={() => setActiveIndex(index)}>
                  <a
                    href={`#${item.url.toLowerCase()}`}
                    className="menu__list-item-link">
                    {activeIndex === index && <ActiveLine />}
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      className="active-line"
      layoutId="activeItem"
      transition={{ duration: 0.5, type: "tween" }}
    />
  );
};

export default Header;
