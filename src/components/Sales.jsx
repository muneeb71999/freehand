import React from "react";
import SaleCard from "./SaleCard";
import Section from "./Section";

const Sales = () => {
  return (
    <Section
      title="Choose the plan that’s right for your business"
      subheading="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
    >
      <SaleCard
        title="Free"
        heading="Standred Plan"
        subTitle="for a month"
        info="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
        color="#0593FA"
      />
      <SaleCard
        title="$20.00"
        heading="Premiun Plan"
        subTitle="for a month"
        info="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
        color="#56CBAE"
      />

      <SaleCard
        title="$50.00"
        heading="Enterprise Plan"
        subTitle="for a month"
        info="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
        color="#FA6770"
      />
    </Section>
  );
};

export default Sales;
