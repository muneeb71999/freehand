import React from "react";

const Card = ({ title, desc, logo }) => {
  return (
    <div className="card">
      <div className="card__logo">
        <img src={logo} alt={title} />
      </div>
      <h2 className="card__heading">{title}</h2>
      <p className="card__desc">{desc}</p>
      <a href="/" className="card__btn">
        Learn More
      </a>
    </div>
  );
};

export default Card;
