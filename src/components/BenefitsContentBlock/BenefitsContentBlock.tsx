import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { slideFromX } from "../../utils/FMvariants";

interface IBenefitsContentBlockProps {
  title: string;
  subtitle: string;
}

const BenefitsContentBlock: FC<IBenefitsContentBlockProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="benefits__content-block">
      <h2 className="benefits__content-title">{title} </h2>
      <p className="subtitle benefits__content-subtitle">{subtitle}</p>
    </div>
  );
};

export default BenefitsContentBlock;
