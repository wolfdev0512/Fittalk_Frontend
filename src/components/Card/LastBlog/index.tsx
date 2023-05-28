import React from "react";
// component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
// hook
import { useRouter } from "hooks";
// types
import { BlogItemInterface } from "types/model/blog/interface";
import { BlogItemModel } from "types/model/blog";

// styled system
import { BlogCardWrapper } from "./LastBlog.style";

// ------------------------------------------
const LastBlog: React.FC<BlogItemInterface> = (blog) => {
	const blogItem = new BlogItemModel(blog);
	const { move } = useRouter();
	return (
		<BlogCardWrapper>
			<Row gap={10} alignItems="center">
				<Col className="blog_image">
					<Image
						src={blogItem.getBlogImage()}
						width={60}
						height={60}
						oFit="cover"
						onClick={() =>
							move("/", {
								tag: blogItem.getTagId(),
								slug: blogItem.getSlug(),
							})
						}
					></Image>
				</Col>
				<Col flex="1">
					<Text
						padding="2px"
						fontSize={16}
						fontWeight={500}
						lineHeight="20px"
						className="blog_title"
						onClick={() =>
							move("/", {
								tag: blogItem.getTagId(),
								slug: blogItem.getSlug(),
							})
						}
					>
						{blogItem.getName()}
					</Text>
				</Col>
			</Row>
		</BlogCardWrapper>
	);
};
export default LastBlog;
