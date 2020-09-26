import React from "react";
import Card from "./Card";
import Section from "./Section";

const Services = () => {
  return (
    <Section
      heading="Our Services"
      title="We build experience"
      subheading="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
    >
      <Card
        title="Design"
        desc="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
        logo="/imgs/icon1.svg"
      ></Card>
      <Card
        title="Ecommerce"
        desc="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
        logo="/imgs/icon2.svg"
      ></Card>
      <Card
        title="Application"
        desc="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
        logo="/imgs/icon3.svg"
      ></Card>
    </Section>
  );
};

export default Services;
