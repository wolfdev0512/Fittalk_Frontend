// styled system
import styled from "styled-components";

// ------------------------------------------------

export const BlogViewWrapper = styled.div`
	padding: 25px 0;
`;

export const FeaturedWrapper = styled.div`
	padding-bottom: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	${({ theme }) => theme.mediaQueries.lg} {
		display: block;
	}
`;
