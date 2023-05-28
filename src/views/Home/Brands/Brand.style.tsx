// styled system
import styled from "styled-components";
// ------------------------------------------------------
export const BrandWrapper = styled.div`
	padding: 30px 0;
	img {
		opacity: 0.4;
	}
	${({ theme }) => theme.mediaQueries.md} {
		display: none;
	}
`;
