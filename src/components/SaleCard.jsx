import React from "react";

const SaleCard = ({ heading, title, subTitle, info, color }) => {
  return (
    <div className="sale-card" style={{ borderTopColor: color }}>
      <h2 className="sale-card__heading">{heading}</h2>
      <h2 className="sale-card__title" style={{ color: color }}>
        {title}
      </h2>
      <p className="sale-card__subtitle">{subTitle}</p>
      <p className="sale-card__info">{info}</p>
      <button className="sale-card__btn">Get started</button>
    </div>
  );
};

export default SaleCard;
