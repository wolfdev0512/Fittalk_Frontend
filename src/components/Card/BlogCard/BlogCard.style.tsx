// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------------

export const BlogCardWrapper = styled.div`
	background: ${themeGet("colors.white")};
	height: fit-content;
	max-width: 380px;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 20px;
	border: 1px solid ${themeGet("colors.border")};
	&:hover {
		box-shadow: 0 2.7px 3.3px rgb(0 0 0 / 4%), 0 8.9px 11.2px rgb(0 0 0 / 6%),
			0 0px 20px rgb(0 0 0 / 10%);
	}
`;

export const BlogHeaderWrapper = styled.div`
	position: relative;
	text-align: center;
	color: ${themeGet("colors.white")};
`;

export const BlogDescriptWrapper = styled.div`
	margin: 38px 20px 0 20px;
	padding-bottom: 31px;
	border-bottom: 1px solid ${themeGet("colors.border")};
	.blog_title {
		overflow: hidden;
		height: 48px;
		max-height: 48px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		margin-bottom: 20px;
	}
	.blog_content {
		div {
			font-size: 14px;
			color: ${themeGet("colors.text")};
			overflow: hidden;
			height: 62px;
			max-height: 62px;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			word-break: break-all;
		}
	}
`;
export const BlogCategory = styled.div`
	position: absolute;
	left: 15px;
	top: 15px;
`;
export const BlogDate = styled.div`
	height: 66px;
	width: 44px;
	position: absolute;
	background: ${themeGet("colors.primary.dark")};
	padding: 22px 6px 10px 6px;
	right: 15px;
	bottom: -33px;
	font-weight: 900;
`;
