import React, { FC } from "react";
import { motion } from "framer-motion";

import robotHandIMG from "../../assets/images/hero/robot-hand.png";
import cardsIMG from "../../assets/images/hero/cards.svg";
import robotLightIMG from "../../assets/images/decorations/robot-light.svg";

import "./Hero.scss";
import {
  cardsVariant,
  robotHandVariant,
  slideFadeUpVariant,
} from "../../utils/FMvariants";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__discount"
            variants={slideFadeUpVariant(0.1, 1.1)}
            initial="hidden"
            animate="visible">
            <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
          </motion.div>
          <motion.h1
            variants={slideFadeUpVariant(0.1, 1.7)}
            initial="hidden"
            animate="visible"
            className="hero__title">
            The Next <span className="accent">Generation</span> Payment Method.
          </motion.h1>
          <motion.p
            variants={slideFadeUpVariant(0.5, 2.5)}
            initial="hidden"
            animate="visible"
            className="subtitle hero__subtitle">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. <br /> We examine annual percentage
            rates, annual fees.
          </motion.p>
          <div className="hero__info">
            <motion.div
              variants={slideFadeUpVariant(0.7, 1.5)}
              initial="hidden"
              animate="visible"
              className="hero__info-item">
              <div className="hero__info-item-number">3800+</div>
              <div className="hero__info-item-title">User Active</div>
            </motion.div>
            <motion.div
              variants={slideFadeUpVariant(1, 1.5)}
              initial="hidden"
              animate="visible">
              |
            </motion.div>
            <motion.div
              variants={slideFadeUpVariant(1.2, 1.5)}
              initial="hidden"
              animate="visible"
              className="hero__info-item">
              <div className="hero__info-item-number">230+</div>
              <div className="hero__info-item-title">TRUSTED BY COMPANY</div>
            </motion.div>
            <motion.div
              variants={slideFadeUpVariant(1.5, 1.5)}
              initial="hidden"
              animate="visible">
              |
            </motion.div>
            <motion.div
              variants={slideFadeUpVariant(1.8, 1.5)}
              initial="hidden"
              animate="visible"
              className="hero__info-item">
              <div className="hero__info-item-number">$230+</div>
              <div className="hero__info-item-title">TRANSACTION</div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hero__decoration hero__decoration--left"></div>
      <div className="hero__decoration hero__decoration--right"></div>
      <div className="hero__imagebox">
        <motion.img
          src={cardsIMG}
          variants={cardsVariant}
          initial="hidden"
          animate="visible"
          alt="cards"
          className="hero__cards-img"
        />
        <motion.img
          src={robotLightIMG}
          variants={cardsVariant}
          initial="hidden"
          animate="visible"
          alt="robot-light"
          className="hero__robot-light-img"
        />
        <motion.img
          variants={robotHandVariant}
          initial="hidden"
          animate="visible"
          src={robotHandIMG}
          alt="robot-hand"
          className="hero__main-img"
        />
      </div>
    </section>
  );
};

export default Hero;
