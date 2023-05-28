import { CopyToClipboard } from "react-copy-to-clipboard";
import React from "react";
import { BsFacebook, BsLink45Deg, BsLinkedin, BsTwitter } from "react-icons/bs";

// component
import { Image } from "components/Image";
import { Row } from "components/Layout";
import { useLinkItem } from "components/hoc";
import { Text, RichText } from "components/Text";
// helper
import { isEmpty } from "utils/helper-validation";
// types
import { BlogItemModel } from "types/model/blog";
// styled system
import {
	BlogContentWrapper,
	BlogDate,
	IconItem,
	LetterWrapper,
} from "./BlogContent.style";
import { BREAKPOINTS } from "theme/base";
// section
import BlogSideBar from "./SideBar";

// ------------------------------------------------------------------------
const IconLinkItem = useLinkItem(IconItem, "icon");
const { xs, lg, md } = BREAKPOINTS;

const BlogContentView: React.FC<{ param: BlogItemModel }> = ({ param }) => {
	const sharedUrl = window.location.href;
	const authorInfo = param.getAuthourInfo();
	return (
		<BlogContentWrapper>
			{param.getCreatedTime().isValid && (
				<BlogDate>
					<Text
						fontSize={25}
						lineHeight="25px"
						fontFamily="changa"
						color="white"
						fontWeight={900}
						textAlign="center"
					>
						{param.getCreatedTime()?.dayfull}
					</Text>
					<Text
						fontSize={12}
						lineHeight="16px"
						textTransform="uppercase"
						color="white"
						fontWeight={900}
						textAlign="center"
					>
						{param.getCreatedTime()?.monthshortname}
					</Text>
				</BlogDate>
			)}

			{!isEmpty(param.getFullTitle()) && (
				<LetterWrapper>
					<Row
						gap={30}
						justifyContent="space-between"
						responsive={{
							[lg]: { flexDirection: "column", gap: 0 },
							[md]: { flexDirection: "row", gap: 10 },
							[xs]: {
								flexDirection: "column",
								gap: 0,
							},
						}}
					>
						<Row
							gap={14}
							alignItems="center"
							padding="10px 0 15px 0"
							className="user_info"
						>
							<Image
								src={authorInfo.getAvatar()}
								width={30}
								height={30}
								oFit="cover"
							></Image>

							<Text fontSize={16} fontWeight={400} color="text">
								<>
									By {authorInfo.getAuthorName()} –{" "}
									{param.getCreatedTimeByDiff()}
								</>
							</Text>
						</Row>
						<Row
							rWidth={"fit-content"}
							gap={10}
							alignItems="center"
							padding="0 10px 0 0"
						>
							<IconLinkItem
								icon={<BsFacebook />}
								target="_blank"
								href={`https://www.facebook.com/sharer.php?u=${sharedUrl}`}
							/>
							<IconLinkItem
								icon={<BsTwitter />}
								target="_blank"
								href={`https://twitter.com/intent/tweet?text=${param.getFullTitle()}&amp;url=${sharedUrl}`}
							/>
							<IconLinkItem
								icon={<BsLinkedin />}
								target="_blank"
								href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${sharedUrl}&amp;title=${param.getFullTitle()}`}
							/>
							<CopyToClipboard text={sharedUrl}>
								<div>
									<IconLinkItem icon={<BsLink45Deg />} />
								</div>
							</CopyToClipboard>
						</Row>
					</Row>
					<Text
						fontSize={22}
						fontWeight={900}
						textTransform="uppercase"
						color="textHeading"
						pb="20px"
						as="h2"
					>
						{param.getFullTitle()}
					</Text>
					<RichText textDocument={param.getContent()} />
				</LetterWrapper>
			)}
			<BlogSideBar authorInfo={authorInfo} />
		</BlogContentWrapper>
	);
};

const BlogContent = React.memo(BlogContentView);
export default BlogContent;
