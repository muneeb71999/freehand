import React from "react";
import Section from "./Section";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Section
      title="We Provide Value"
      heading="Our blog"
      subheading="Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros ."
    >
      <BlogCard
        title="120 million curious readers and growing."
        img="/imgs/blog1.png"
      ></BlogCard>
      <BlogCard
        title="Expand your reading.
        Expand your mind."
        img="/imgs/blog2.png"
      ></BlogCard>
    </Section>
  );
};

export default Blog;
