import { motion } from "framer-motion";
import React, { FC } from "react";
import Button from "../../components/Button/Button";

import appStoreIMG from "../../assets/images/appstore.svg";
import googlePlayIMG from "../../assets/images/googleplay.svg";

import "./Invoicing.scss";
import { slideFromX } from "../../utils/FMvariants";
const Invoicing: FC = () => {
  return (
    <section className="invoicing">
      <div className="container">
        <div className="invoicing__wrapper">
          <div className="invoicing__imagebox">
            <motion.div
              variants={slideFromX({
                direction: "left",
                distance: 100,
                delay: 0.5,
                duration: 0.7,
              })}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              className="invoicing__paypal">
              <div className="invoicing__paypal-text">
                <h4 className="invoicing__paypal-title">Paypal</h4>
                <div className="invoicing__paypal-subtitle">Checkout</div>
              </div>
              <div className="invoicing__paypal-info">
                <div className="invoicing__paypal-total">
                  Total <span>$210</span>
                </div>
                <Button extraClassName="btn--inverse invoicing__paypal-info-btn">
                  Change
                </Button>
              </div>
              <Button extraClassName="invoicing__paypal-payment-btn">
                Make Payment
              </Button>
            </motion.div>
            <motion.div
              variants={slideFromX({
                direction: "left",
                distance: 100,
                delay: 0,
              })}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              className="invoicing__transactions">
              <h4 className="invoicing__transactions-title">
                Last Transaction
              </h4>
              <div className="invoicing__transactions-items">
                <div className="invoicing__transactions-item">
                  <div className="invoicing__transactions-item-textbox invoicing__transactions-item-textbox--dribble">
                    <h5 className="invoicing__transactions-item-title">
                      Dribble Pro
                    </h5>
                    <div className="invoicing__transactions-item-subtitle">
                      15 Days ago
                    </div>
                  </div>
                  <div className="invoicing__transactions-item-price invoicing__transactions-item-price--out">
                    -$250,93
                  </div>
                </div>
                <div className="invoicing__transactions-item">
                  <div className="invoicing__transactions-item-textbox invoicing__transactions-item-textbox--netflix">
                    <h5 className="invoicing__transactions-item-title">
                      Netflix
                    </h5>
                    <div className="invoicing__transactions-item-subtitle">
                      4 Days ago
                    </div>
                  </div>
                  <div className="invoicing__transactions-item-price invoicing__transactions-item-price--out">
                    -$250,93
                  </div>
                </div>
                <div className="invoicing__transactions-item">
                  <div className="invoicing__transactions-item-textbox invoicing__transactions-item-textbox--manulife">
                    <h5 className="invoicing__transactions-item-title">
                      Manulife Cash
                    </h5>
                    <div className="invoicing__transactions-item-subtitle">
                      4 Days ago
                    </div>
                  </div>
                  <div className="invoicing__transactions-item-price invoicing__transactions-item-price--in">
                    +$250,93
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideFromX({
                direction: "left",
                distance: 100,
                delay: 0,
                duration: 0.7,
              })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="invoicing__notification">
              Great! Your Payment is succesfully.
            </motion.div>
          </div>
          <motion.div
            variants={slideFromX({ direction: "right", distance: 100 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: false }}
            className="invoicing__content">
            <h2 className="invoicing__title">
              Easily control your billing & invoicing.
            </h2>
            <p className="subtitle invoicing__subtitle">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="invoicing__buttons">
              <a href="http://appstore.com" className="invoicing__btn">
                <img src={appStoreIMG} alt="appstore" />
              </a>
              <a href="http://google-play.com" className="invoicing__btn">
                <img src={googlePlayIMG} alt="googleplay" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Invoicing;
