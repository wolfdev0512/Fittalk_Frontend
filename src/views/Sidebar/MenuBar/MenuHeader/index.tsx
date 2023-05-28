/* eslint-disable react/display-name */
import React from "react";
// component
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Row, Col } from "components/Layout";
// types
import { CollapseWrapperProps } from "components/Collapse";
//assets
import { ArrowsIcon } from "assets/icon";
// styled component
import {
	MenuHeaderWrapper,
	MenuHeaderWrapperForDeep2,
} from "./MenuHeader.style";

import { useLinkItem } from "components/hoc";

// -----------------------------------------------------------

const getContent = (StyledWrapper) => {
	const Wrapper = useLinkItem(StyledWrapper, "wrapper");
	return ({
		handleOpen,
		hide,
		title,
		data,
		param,
		children,
	}: CollapseWrapperProps) => {
		const linkProperties = param
			? { href: param }
			: { onClick: () => handleOpen() };

		return (
			<Wrapper
				className="MenuHeader"
				{...linkProperties}
				hColor={children ? undefined : "primary.regular"}
			>
				<Row justifyContent="space-between" alignItems="center">
					<Col>
						<Row gap={10}>
							{data && (
								<Col>
									<Image src={data} width={20} height={20} />
								</Col>
							)}
							<Text
								fontSize={14}
								fontWeight={700}
								lineHeight={1.5}
								textTransform="uppercase"
							>
								{title}
							</Text>
						</Row>
					</Col>
					{children && (
						<Col className="arrow-icon">
							{hide ? (
								<ArrowsIcon.up2 iSize={{ x: 25, y: 25 }} iColor="#1a1818" />
							) : (
								<ArrowsIcon.down2 iSize={{ x: 25, y: 25 }} iColor="#1a1818" />
							)}
						</Col>
					)}
				</Row>
			</Wrapper>
		);
	};
};

export const MenuHeaderForDeep1: React.FC<CollapseWrapperProps> =
	getContent(MenuHeaderWrapper);
export const MenuHeaderForDeep2: React.FC<CollapseWrapperProps> = getContent(
	MenuHeaderWrapperForDeep2
);
