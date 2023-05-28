/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo, ComponentType } from "react";
import Link from "next/link";
// component
import { Row } from "components/Layout";
// utils
import { getLink } from "utils/helper-links";
// type
import { LinkItemWrapperProps, IconWrapperProps } from "./types";
// styled system
import styled from "styled-components";
import { Text } from "components/Text";

// -----------------------------------------------------------------
const IconWrapper = styled.div<IconWrapperProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ iconWidth }) => {
		return iconWidth ? `${iconWidth}px` : "auto";
	}};
`;

const useLinkItem = (
	LinkItemWrapper: ComponentType<LinkItemWrapperProps>,
	mode: "title" | "icon" | "wrapper" = "title"
) => {
	const BASE_URL = process.env.NEXT_PUBLIC_PRODUCT_BASE_URL;
	if (mode === "wrapper") {
		return ({ href = "", newTab = false, ...props }) => {
			const linkHref = useMemo(() => getLink(href, BASE_URL), [href]);

			return (
				<>
					{href ? (
						<Link href={linkHref}>
							<a
								target={newTab ? "_blank" : "_self"}
								rel="noreferrer"
								style={{ display: "contents" }}
							>
								<LinkItemWrapper {...props} />
							</a>
						</Link>
					) : (
						<LinkItemWrapper {...props} />
					)}
				</>
			);
		};
	}
	if (mode === "title") {
		return ({
			title = "",
			href = "",
			icon,
			iconSlot = "start",
			iconDirection = "row",
			iconGaping = 6,
			iconWidth,
			alignVertical = "center",
			alignHorizontal = "initial",
			handleClick = () => {},
			newTab = false,
		}: LinkItemWrapperProps) => {
			const linkHref = useMemo(() => getLink(href, BASE_URL), [href]);
			const handleOnClick = () => {
				handleClick();
			};
			return (
				<>
					{href === "" ? (
						<LinkItemWrapper>
							<Row
								alignItems={alignVertical}
								justifyContent={alignHorizontal}
								gap={icon ? iconGaping : 0}
								flexDirection={iconDirection}
							>
								{icon && iconSlot === "start" && (
									<IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
								)}
								<Text onClick={handleOnClick} className="link_title" as="a">
									{title}
								</Text>
								{icon && iconSlot === "end" && (
									<IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
								)}
							</Row>
						</LinkItemWrapper>
					) : (
						<Link href={linkHref}>
							<a
								target={newTab ? "_blank" : "_self"}
								rel="noreferrer"
								style={{ display: "contents" }}
							>
								<LinkItemWrapper style={{ margin: "inherit" }}>
									<Row
										alignItems={alignVertical}
										justifyContent={alignHorizontal}
										gap={icon ? iconGaping : 0}
										flexDirection={iconDirection}
									>
										{icon && iconSlot === "start" && (
											<IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
										)}
										<Text onClick={handleOnClick} className="link_title">
											{title}
										</Text>
										{icon && iconSlot === "end" && (
											<IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
										)}
									</Row>
								</LinkItemWrapper>
							</a>
						</Link>
					)}
				</>
			);
		};
	}
	if (mode === "icon") {
		return ({
			href = "",
			icon,
			newTab,
			handleClick = () => {},
		}: LinkItemWrapperProps) => {
			const handleOnClick = () => {
				handleClick();
			};
			const linkHref = useMemo(() => getLink(href, BASE_URL), [href]);
			return (
				<LinkItemWrapper onClick={handleOnClick}>
					{href == "" ? (
						icon
					) : (
						<Link href={linkHref}>
							<a
								target={newTab ? "_blank" : "_self"}
								rel="noreferrer"
								style={{ display: "contents" }}
							>
								{icon}
							</a>
						</Link>
					)}
				</LinkItemWrapper>
			);
		};
	}
	return () => <></>;
};

export default useLinkItem;
