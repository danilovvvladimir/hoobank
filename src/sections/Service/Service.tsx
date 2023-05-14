import { motion } from "framer-motion";
import React, { FC } from "react";
import Button from "../../components/Button/Button";

import "./Service.scss";
interface ServiceProps {
  setIsModalActive: (state: boolean) => void;
}

const Service: FC<ServiceProps> = ({ setIsModalActive }) => {
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
          <Button onClick={setIsModalActive} extraClassName="service__btn">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
