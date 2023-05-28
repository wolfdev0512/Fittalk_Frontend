import React, { FC } from "react";
import { Badge } from "components/Badge";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { useRouter } from "hooks";
import { BlogItemModel } from "types/model/blog";
import { BlogItemInterface } from "types/model/blog/interface";
import { BlogBriefWrapper, BreifContentWrapper } from "./Brief.styled";

const BlogBrief: FC<{ blog: BlogItemInterface; className }> = ({
	blog,
	className,
}) => {
	const blogItem = new BlogItemModel(blog);
	const { move } = useRouter();

	return (
		<BlogBriefWrapper className={className}>
			<Image
				src={blogItem.getBlogImage()}
				mode="fill"
				oFit="cover"
				onClick={() =>
					move("/", {
						tag: blogItem.getTagId(),
						slug: blogItem.getSlug(),
					})
				}
			></Image>
			<BreifContentWrapper>
				{blogItem.getTagName() != "" && (
					<Badge
						badgeBg="secondary.regular"
						onClick={() => move("/", { tag: blogItem.getTagId() })}
					>
						{blogItem.getTagName()}
					</Badge>
				)}
				<Text
					fontSize={20}
					fontWeight={500}
					color="white"
					textTransform="uppercase"
					title={blogItem.getName()}
					pt={"5px"}
					className="briefContent"
					onClick={() =>
						move("/", {
							tag: blogItem.getTagId(),
							slug: blogItem.getSlug(),
						})
					}
				>
					{blogItem.getName()}
				</Text>
			</BreifContentWrapper>
		</BlogBriefWrapper>
	);
};

export default BlogBrief;
