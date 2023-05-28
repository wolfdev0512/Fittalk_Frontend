// styled system
import styled from "styled-components";

// ----------------------------------------------

export const ItemWrapper = styled.div`
	width: 293px;
	position: relative;
	padding: 48px 0;
	text-align: center;
	margin-right: 10px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	&::after {
		content: " ";
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(26, 24, 24, 0.5);
	}
	img {
		transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	}
	&:hover {
		img {
			transform: scale(1.1);
		}
	}
`;
export const TextWrapper = styled.div`
	z-index: 1;
	position: relative;
`;
