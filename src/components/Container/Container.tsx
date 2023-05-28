import React, { PropsWithChildren } from "react";
// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// theme
import { SITEWIDTH } from "theme";
import { ContainerWithWrapperProps } from "./types";

// ----------------------------------------------------------
export const ContainerWithWrapper = styled.div<ContainerWithWrapperProps>`
	max-width: ${({ mWidth }) => (mWidth ? `${mWidth}px` : "none")};
	margin: 0 auto;
	position: relative;
`;

export const ColorContainer = styled.div<ContainerWithWrapperProps>`
	background: ${({ cColor }) => themeGet(`colors.${cColor}`, cColor)};
`;
export const ContainerContent = styled.div`
	padding: 0 15px;
	margin: 0 auto;
	max-width: none;

	${({ theme }) => theme.mediaQueries.lg} {
		padding: 0 35px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		padding: 0 25px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 0 15px;
	}
`;

const Container: React.FC<PropsWithChildren<ContainerWithWrapperProps>> = ({
	children,
	...props
}) => {
	return (
		<ContainerWithWrapper {...props}>
			<ContainerContent>{children}</ContainerContent>
		</ContainerWithWrapper>
	);
};

ContainerWithWrapper.defaultProps = {
	mWidth: SITEWIDTH,
};

export default Container;
