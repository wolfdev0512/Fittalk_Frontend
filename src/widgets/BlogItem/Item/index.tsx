import React from "react";
// component
import { BlogCard, BlogCardLoading } from "components/Card";
// styled commponent
import { BlogItemWrapper } from "./BlogItem.style";
// types
import { BlogItemInterface } from "types/model/blog/interface";

// ----------------------------------------------------

const BlogItem = ({ loading = false, ...props }: BlogItemInterface) => {
  return (
    <BlogItemWrapper>
      {loading ? <BlogCardLoading /> : <BlogCard {...props}></BlogCard>}
    </BlogItemWrapper>
  );
};
export default BlogItem;
