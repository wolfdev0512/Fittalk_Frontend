import React from "react";
// component
import { Row, Col } from "components/Layout";
import { BlogImage } from "components/Image";
import { Text } from "components/Text";
import { Hidden } from "components/Hidden";
// icons
import { FiClock } from "react-icons/fi";
// styled component
import { BlogItemWrapper, BlogImageWrapper } from "./Vertical.style";
// types
import { BlogItemProps } from "types/model/blog/interface";
import { BlogItemModel } from "types/model/blog";
import { BREAKPOINTS } from "theme/base";
import { useRouter } from "hooks";

// -------------------------------------------------------------

const { xs } = BREAKPOINTS;

const BlogItem: React.FC<BlogItemProps> = ({ itemData }) => {
	const blogData = new BlogItemModel(itemData);
	const authInfo = blogData.getAuthourInfo();
	const { move } = useRouter();

	return (
		<BlogItemWrapper>
			<Row gap={20} responsive={{ [xs]: { gap: 10, flexDirection: "column" } }}>
				<Col>
					<BlogImageWrapper>
						<BlogImage
							width={160}
							height={106}
							media={blogData.getBlogMedia()}
							oFit="cover"
							oPosition="top"
							mode="fill"
						></BlogImage>
					</BlogImageWrapper>
				</Col>

				<Col flex="1">
					<Text
						className="briefTitle"
						fontSize={20}
						fontWeight={600}
						pointered
						onClick={() =>
							move("/", {
								tag: blogData.getTagId(),
								slug: blogData.getSlug(),
							})
						}
					>
						{blogData.getName()}
					</Text>
					<Text
						fontSize={13}
						fontWeight={400}
						padding="0 0 10px 0"
						color="#8d8d8d"
						textTransform="capitalize"
						className="symbolText"
					>
						<>
							{blogData.getTagName()} / by {authInfo.getAuthorName()} {"- "}
							<FiClock /> {blogData.getCreatedTimeByDiff()}
						</>
					</Text>
					<Hidden wHide={[768]}>
						<Text
							fontSize={15}
							fontWeight={400}
							color="#8d8d8d"
							className="briefContent"
						>
							{blogData.getShortTitle()}
						</Text>
					</Hidden>
				</Col>
			</Row>
		</BlogItemWrapper>
	);
};
export default BlogItem;
