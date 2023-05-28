// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------
export const PickupMenu = styled.div`
	padding: 8px 0;
	background-color: white;
	border: 1px solid ${themeGet(`colors.border`)};
	border-radius: ${({ theme }) => theme.radii.small};
`;
export const MenuItemWrapper = styled.div`
	padding: 10px 20px;
	cursor: pointer;
	:hover {
		background: #f8f9fa;
	}
`;
