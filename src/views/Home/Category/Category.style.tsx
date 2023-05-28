// style system
import styled from "styled-components";
// ----------------------------------------------
export const CategoryWrapper = styled.div`
	padding: 20px 0;
	${({ theme }) => theme.mediaQueries.xxs} {
		display: none;
	}
`;
