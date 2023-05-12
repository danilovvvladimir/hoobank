import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import BenefitsContentBlock from "../../components/BenefitsContentBlock/BenefitsContentBlock";
import BenefitsTrigger from "../../components/BenefitsTrigger/BenefitsTrigger";
import Button from "../../components/Button/Button";
import {
  benefitsContentBlocks,
  benefitsTriggers,
} from "../../constants/constants";
import { slideFromX } from "../../utils/FMvariants";

import "./Benefits.scss";

const Benefits: FC = () => {
  const [activeBlockIndex, setActiveBlockIndex] = useState<number>(0);
  console.log("rerendered");

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__wrapper">
          <motion.div
            variants={slideFromX({ direction: "left", distance: 100 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.05, once: false }}
            className="benefits__content">
            <BenefitsContentBlock
              {...benefitsContentBlocks[activeBlockIndex]}
            />
            <Button extraClassName="benefits__content-btn">Get Started</Button>
          </motion.div>
          <motion.div
            variants={slideFromX({ direction: "right", distance: 100 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.05, once: false }}
            className="benefits__triggers">
            {benefitsTriggers.map((trigger, index) => (
              <BenefitsTrigger
                key={trigger.id}
                idx={index}
                {...trigger}
                isActive={activeBlockIndex === index}
                onClick={setActiveBlockIndex}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
