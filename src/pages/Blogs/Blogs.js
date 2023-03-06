import React from "react";
import { dataPosts } from "../../shared/data";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  return (
    <>
      {" "}
      {dataPosts.map((el, i) => (
        <Blog key={i} data={el}></Blog>
      ))}
    </>
  );
};

export default Blogs;
