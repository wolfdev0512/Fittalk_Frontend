import React, { FC } from "react";
import { RichText, Text } from "components/Text";
import { Row } from "components/Layout";
import { LastBlog } from "components/Card";
import { Button } from "components/Button";

import useBlog from "hooks/useBlog";

import {
	AuthInfoWrapper,
	BlogSideInner,
	BlogSideWrapper,
	SubscribeWrapper,
} from "./SideBar.style";
import { AuthorModel } from "types/model/author";
import { Image } from "components/Image";

const BlogSideBar: FC<{ authorInfo: AuthorModel }> = ({ authorInfo }) => {
	const { fetchBlogsByTag } = useBlog();
	const blogs = fetchBlogsByTag();

	return (
		<BlogSideWrapper>
			<BlogSideInner>
				<SubscribeWrapper>
					<Text
						fontSize={14}
						fontWeight={700}
						color="textHeading"
						textTransform="uppercase"
						padding="0 0 8px 0"
					>
						Don’t be Left in the Dark!
					</Text>
					<Text
						fontSize={14}
						fontWeight={500}
						color="text"
						padding="0 0 8px 0"
						className="subscribe_desc"
					>
						Let's make your inbox a little more interesting. Subscribe to
						FITTALK and get supplement and health insider information, exclusive
						product reviews and all the latest in the fitness world! Get ready
						to elevate your game.
					</Text>
					<Button>Subscribe</Button>
				</SubscribeWrapper>
				<AuthInfoWrapper>
					<Image
						src={authorInfo.getAvatar()}
						width={120}
						height={120}
						oFit="cover"
					></Image>
					<Text
						fontSize={20}
						fontWeight={700}
						textTransform="uppercase"
						color="textHeading"
						p="10px 0"
						as="h3"
					>
						{authorInfo.getAuthorFullName()}
					</Text>
					<RichText textDocument={authorInfo.getAuthorDescription()} />
				</AuthInfoWrapper>
				<div>
					<Text
						fontSize={14}
						fontWeight={700}
						color="textHeading"
						padding="0 0 8px 0"
					>
						Last News
					</Text>
					<Row flexDirection="column" gap={15} padding="0 0 50px 0">
						{blogs.map((item, idx) => (
							<LastBlog {...item} key={`last_blog_${idx}`}></LastBlog>
						))}
					</Row>
				</div>
			</BlogSideInner>
		</BlogSideWrapper>
	);
};

export default BlogSideBar;
