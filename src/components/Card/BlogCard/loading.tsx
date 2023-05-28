import React from "react";
import ContentLoader from "react-content-loader";
// component
import { Row } from "components/Layout";
// styled system
import {
	BlogCardWrapper,
	BlogHeaderWrapper,
	BlogDescriptWrapper,
} from "./BlogCard.style";

// ------------------------------------------
const BlogCard: React.FC = () => {
	return (
		<BlogCardWrapper>
			<BlogHeaderWrapper>
				<ContentLoader
					height={200}
					width="100%"
					backgroundColor="#D2D5DA"
					foregroundColor="#ecebeb"
					speed={2}
				>
					<rect x="0" y="0" width="400" height="200" />
				</ContentLoader>
			</BlogHeaderWrapper>
			<BlogDescriptWrapper>
				<ContentLoader
					height={140}
					width="100%"
					backgroundColor="#D2D5DA"
					foregroundColor="#ecebeb"
					speed={2}
				>
					<rect x="0" y="0" width="100%" height="25" />
					<rect x="0" y="35" width="100%" height="25" />
					<rect x="0" y="70" width="100%" height="80" />
				</ContentLoader>

				<div className="blog_content"></div>
			</BlogDescriptWrapper>

			<Row padding="18px 20px" justifyContent="space-between">
				<ContentLoader
					height={20}
					width={60}
					backgroundColor="#D2D5DA"
					foregroundColor="#ecebeb"
					speed={2}
				>
					<rect x="0" y="0" width="60" height="20" />
				</ContentLoader>
				<ContentLoader
					height={20}
					width={80}
					backgroundColor="#D2D5DA"
					foregroundColor="#ecebeb"
					speed={2}
				>
					<rect x="0" y="0" width="80" height="20" />
				</ContentLoader>
			</Row>
		</BlogCardWrapper>
	);
};
export default BlogCard;
