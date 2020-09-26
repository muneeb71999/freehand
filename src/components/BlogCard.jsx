import React from "react";

const BlogCard = ({ title, img }) => {
  return (
    <div className="blog__card">
      <img alt={title} className="blog__img" src={img} />
      <h2 className="blog__title">{title}</h2>
    </div>
  );
};

export default BlogCard;
