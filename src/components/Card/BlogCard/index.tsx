import React from "react";
// component
import { Row } from "components/Layout";
import { RichText, Text } from "components/Text";
import { Image } from "components/Image";
import { Badge } from "components/Badge";
// hook
import { useRouter } from "hooks";
// types
import { BlogItemInterface } from "types/model/blog/interface";
import { BlogItemModel } from "types/model/blog";

// styled system
import {
	BlogCardWrapper,
	BlogHeaderWrapper,
	BlogDescriptWrapper,
	BlogCategory,
	BlogDate,
} from "./BlogCard.style";

// ------------------------------------------
const BlogCard: React.FC<BlogItemInterface> = (blog) => {
	const blogItem = new BlogItemModel(blog);
	const { move } = useRouter();
	return (
		<BlogCardWrapper>
			<BlogHeaderWrapper>
				<Image
					src={blogItem.getBlogImage()}
					width={390}
					height={200}
					oFit="cover"
					onClick={() =>
						move("/", {
							tag: blogItem.getTagId(),
							slug: blogItem.getSlug(),
						})
					}
				></Image>
				<BlogCategory>
					{blogItem.getTagName() != "" && (
						<Badge
							badgeBg={blogItem.getBadgeColor()}
							onClick={() => move("/", { tag: blogItem.getTagId() })}
						>
							{blogItem.getTagName()}
						</Badge>
					)}
				</BlogCategory>
				{blogItem.getCreatedTime().isValid && (
					<BlogDate>
						<Text fontSize={25} lineHeight={"25px"} fontFamily="changa">
							{blogItem.getCreatedTime()?.dayfull}
						</Text>
						<Text fontSize={12} lineHeight={"16px"} textTransform="uppercase">
							{blogItem.getCreatedTime()?.monthshortname}
						</Text>
					</BlogDate>
				)}
			</BlogHeaderWrapper>
			<BlogDescriptWrapper>
				<Text
					as="a"
					fontSize={24}
					fontWeight={900}
					textTransform="uppercase"
					lineHeight="24px"
					letterSpacing={0.11}
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
				<RichText
					textDocument={blogItem.getDescription()}
					className="blog_content"
				/>
			</BlogDescriptWrapper>

			<Row padding="18px 20px" justifyContent="space-between">
				<Text
					as="a"
					fontSize={10}
					color="primary.regular"
					textTransform="uppercase"
					fontWeight={900}
					onClick={() =>
						move("/", {
							tag: blogItem.getTagId(),
							slug: blogItem.getSlug(),
						})
					}
				>
					Read More
				</Text>
				<Text fontSize={10} color="text" fontWeight={900}>
					{blogItem.getCreatedTime()?.datenormal}
				</Text>
			</Row>
		</BlogCardWrapper>
	);
};
export default BlogCard;
