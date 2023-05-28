// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------------

export const BlogCardWrapper = styled.div`
	background: ${themeGet("colors.white")};
	height: fit-content;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		.blog_title {
			text-decoration: underline;
		}
	}
	.blog_title {
		overflow: hidden;
		max-height: 60px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}
	.blog_image {
		font-size: 0;
		img {
			border-radius: 5px;
		}
	}
`;
