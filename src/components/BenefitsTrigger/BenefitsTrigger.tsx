import React, { FC } from "react";

interface BenefitsTriggerProps {
  title: string;
  subtitle: string;
  icon: string;
  isActive: boolean;
  idx: number;
  onClick: (id: number) => void;
}

const BenefitsTrigger: FC<BenefitsTriggerProps> = ({
  title,
  icon,
  idx,
  subtitle,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`benefits__trigger ${isActive && "benefits__trigger--active"}`}
      onClick={() => onClick(idx)}>
      <div className="benefits__trigger-icon">
        <img src={icon} alt="" className="benefits__trigger-img" />
      </div>
      <div className="benefits__trigger-content">
        <h4 className="benefits__trigger-title">{title}</h4>
        <p className="subtitle benefits__trigger-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default BenefitsTrigger;
