import React from "react";
// component
import Container, {
	ColorContainer,
	ContainerContent,
	ContainerWithWrapper,
} from "./Container";

// types
import { WithContainerProps } from "./types";

// -------------------------------------------------------------
const WithContainer = ({
	cColor,
	SectionView,
	mWidth,
	mode = "container",
	className = "",
	...props
}: WithContainerProps) => {
	if (mode === "container") {
		return (
			<ColorContainer cColor={cColor} className={className}>
				<Container mWidth={mWidth}>
					<SectionView {...props} />
				</Container>
			</ColorContainer>
		);
	}

	if (mode === "wrapper") {
		return (
			<ColorContainer cColor={cColor} className={className}>
				<ContainerWithWrapper mWidth={mWidth}>
					<SectionView {...props} />
				</ContainerWithWrapper>
			</ColorContainer>
		);
	}
	if (mode === "noWrapper") {
		return (
			<ContainerContent className={className}>
				<SectionView {...props} />
			</ContainerContent>
		);
	}

	if (mode === "none") {
		return <SectionView {...props} className={className} />;
	}
	return <></>;
};

export default WithContainer;
