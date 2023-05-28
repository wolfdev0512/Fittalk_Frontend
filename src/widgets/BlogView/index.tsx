import React from "react";
// items
import BlogViewAll from "./BlogViewAll";
import BlogByCategory from "./BlogByCategory";
// types
import { BlogViewItemProps } from "components/Card";

// ----------------------------------------------------
const BlogView: React.FC<BlogViewItemProps> = ({
	mode = "byCategory",
	...props
}) => {
	return mode === "all" ? (
		<BlogViewAll {...props} />
	) : (
		<BlogByCategory {...props} />
	);
};

export default BlogView;
