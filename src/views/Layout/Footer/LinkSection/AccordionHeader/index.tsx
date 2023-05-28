import React from "react";
// component
import { Text } from "components/Text";
import { Row, Col } from "components/Layout";
// types
import { CollapseWrapperProps } from "components/Collapse";
//assets
import { ArrowsIcon } from "assets/icon";
// styled component
import {
	AccordionHeaderWrapper,
	AccordionHeaderWrapperForDeep2,
	AccordionHeaderWrapperForDeep3,
} from "./AccordionHeader.style";
import { useLinkItem } from "components/hoc";

// -----------------------------------------------------------

const getContent = (StyledWrapper) => {
	const Wrapper = useLinkItem(StyledWrapper, "wrapper");
	// eslint-disable-next-line react/display-name
	return ({
		handleOpen,
		hide,
		title,
		param,
		children,
	}: CollapseWrapperProps) => {
		const linkProperties = param
			? { href: param }
			: { onClick: () => handleOpen() };

		return (
			<Wrapper
				className="accordionHeader"
				{...linkProperties}
				hColor={children ? undefined : "primary.regular"}
			>
				<Row justifyContent="space-between" alignItems="center">
					<Col>
						<Text
							fontSize={14}
							fontWeight={700}
							lineHeight={1.5}
							textTransform="uppercase"
						>
							{title}
						</Text>
					</Col>
					{children && (
						<Col>{hide ? <ArrowsIcon.up /> : <ArrowsIcon.down />}</Col>
					)}
				</Row>
			</Wrapper>
		);
	};
};

export const AccordionHeaderForDeep1: React.FC<CollapseWrapperProps> =
	getContent(AccordionHeaderWrapper);
export const AccordionHeaderForDeep2: React.FC<CollapseWrapperProps> =
	getContent(AccordionHeaderWrapperForDeep2);
export const AccordionHeaderForDeep3: React.FC<CollapseWrapperProps> =
	getContent(AccordionHeaderWrapperForDeep3);
