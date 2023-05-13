import { motion } from "framer-motion";
import React from "react";
import Button from "../../components/Button/Button";

import "./Service.scss";
const Service = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="service__wrapper">
          <div className="service__content">
            <h2 className="service__title">Let's try our service now!</h2>
            <p className="subtitle service__subtitle">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <Button extraClassName="service__btn">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
