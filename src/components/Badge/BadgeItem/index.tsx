import React, { PropsWithChildren } from "react";
// types
import { BadgeContainerProps } from "../types";
// styled component
import { BadgeWrapper } from "./Badget.style";

// ------------------------------------------------------------------

const Badge: React.FC<PropsWithChildren<BadgeContainerProps>> = ({
	children,
	badgeBg = "primary.regular",
	badgeColor = "white",
	...props
}) => {
	return (
		<BadgeWrapper badgeBg={badgeBg} badgeColor={badgeColor} {...props}>
			{children}
		</BadgeWrapper>
	);
};
export default Badge;
