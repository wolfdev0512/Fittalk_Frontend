// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------
export const MenuHeaderWrapper = styled.div`
	padding: 15px 20px;
	border-bottom: 1px solid ${themeGet("colors.border")};
	cursor: pointer;
`;
