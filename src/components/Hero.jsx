import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="heading-primary">
          Freehand your brand with a beautiful website
        </h1>
        <p className="subheading-primary">
          Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
          varius enim in eros .
        </p>

        <div className="hero__cta">
          <button className="btn-blue-fill">View Projects</button>
          <button className="btn-blue-border">Learn More</button>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__img">
          <img src="/imgs/hero1.png" alt="Big Background" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
