import React from "react";

const Section = ({ heading, title, subheading, children }) => {
  return (
    <section className="section-container">
      <h3 className="heading-tertiary">{heading}</h3>
      <h2 className="heading-secondary">{title}</h2>
      <p className="subheading-secondary">{subheading}</p>
      <div className="section">{children}</div>
    </section>
  );
};

export default Section;
