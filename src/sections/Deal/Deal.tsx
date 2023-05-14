import { motion } from "framer-motion";
import React, { FC } from "react";
import Button from "../../components/Button/Button";
import "./Deal.scss";
import dealIMG from "../../assets/images/deal-img.svg";
import { slideFromY } from "../../utils/FMvariants";
interface DealProps {
  setIsModalActive: (state: boolean) => void;
}

const Deal: FC<DealProps> = ({ setIsModalActive }) => {
  return (
    <section className="deal">
      <div className="container">
        <div className="deal__wrapper">
          <motion.div
            variants={slideFromY({
              direction: "up",
              distance: 100,
              duration: 1,
            })}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="deal__content">
            <h2 className="deal__title">
              Find a better card deal in few easy steps.
            </h2>
            <p className="subtitle deal__subtitle">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button onClick={setIsModalActive}>Get Started</Button>
          </motion.div>
          <motion.div
            variants={slideFromY({
              direction: "up",
              distance: 100,
              delay: 0.5,
              duration: 1,
            })}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="deal__imagebox">
            <img src={dealIMG} className="deal__image" alt="deal-about" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
