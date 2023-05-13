import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import { companies, testimonials } from "../../constants/constants";
import { slideFromY, testimonialsVariant } from "../../utils/FMvariants";

import "./Feedback.scss";

const Feedback: FC = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback__top">
          <h2 className="feedback__title">What people are saying about us</h2>
          <div className="subtitle feedback__subtitle">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </div>
        </div>

        <div className="feedback__testimonials">
          <AnimatePresence>
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                variants={testimonialsVariant(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}>
                <Testimonial {...item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="feedback__companies">
          {companies.map((company) => (
            <img key={company.id} src={company.image} alt={company.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
