import React, { FC } from "react";
import Button from "../../components/Button/Button";

import appStoreIMG from "../../assets/images/appstore.svg";
import googlePlayIMG from "../../assets/images/googleplay.svg";

import "./Invoicing.scss";
const Invoicing: FC = () => {
  return (
    <section className="invoicing">
      <div className="container">
        <div className="invoicing__wrapper">
          <div className="invoicing__imagebox">
            <div className="invoicing__paypal">
              <div className="invoicing__paypal-text">
                <h4 className="invoicing__paypal-title">Paypal</h4>
                <div className="invoicing__paypal-subtitle">Checkout</div>
              </div>
              <div className="invoicinig__paypal-info">
                <div className="invoicing__paypal-total">
                  Total <span>$210</span>
                </div>
                <Button extraClassName="btn--inverse invoicing__paypal-info-btn">
                  Change
                </Button>
              </div>
              <Button>Make Payment</Button>
            </div>
            <div className="invoicing__transactions">
              <h4 className="invoicing__transactions-title">
                Last Transaction
              </h4>
              <div className="invoicing__transactions-items">
                <div className="invoicing__transactions-item">
                  <div className="invoicing__transaction-item-textbox">
                    <h5 className="invoicing__transactions-item-title">
                      Dribbble Pro
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
                  <div className="invoicing__transaction-item-textbox">
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
                  <div className="invoicing__transaction-item-textbox">
                    <h5 className="invoicing__transactions-item-title">
                      Manulife Cash
                    </h5>
                    <div className="invoicing__transactions-item-subtitle">
                      4 Days ago
                    </div>
                  </div>
                  <div className="invoicing__transactions-item-price invoicing__transactions-item-price--in">
                    $250,93
                  </div>
                </div>
              </div>
            </div>
            <div className="invoicing__notification">
              Great! Your Payment is succesfully.
            </div>
          </div>
          <div className="invoicing__content">
            <h2 className="invoicing__title">
              Easily control your billing & invoicing.
            </h2>
            <p className="invoicing__subtitle">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="invoicing__buttons">
              <button className="invocing__btn">
                <img src={appStoreIMG} alt="appstore" />
              </button>
              <button className="invoicing__btn">
                <img src={googlePlayIMG} alt="googleplay" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoicing;
