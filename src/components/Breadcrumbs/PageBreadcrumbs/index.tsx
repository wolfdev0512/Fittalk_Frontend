import React from "react";
// component
import { Row } from "components/Layout";
import { useLinkItem } from "components/hoc";
// types
import { BreadcrumbsProps } from "../types";
// styeld component
import { LinkWrapper, NonLinkWrapper } from "./PageBreadcrumbs.style";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
// ---------------------------------------------
const MenuItem = useLinkItem(LinkWrapper);
const IconMenuItem = useLinkItem(LinkWrapper, "icon");
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	return (
		<Row gap={10} rWidth={"fit-content"}>
			<Row rWidth={"fit-content"}></Row>
			{items.map((item, index) => {
				if (item.title == "home") {
					return (
						<Row key={`breadcurmbs_${index}`} gap={10} rWidth={"fit-content"}>
							<IconMenuItem
								href="/"
								mode="icon"
								icon={<AiOutlineHome fontSize={16} />}
							></IconMenuItem>
							<LinkWrapper>
								<MdOutlineArrowForwardIos />
							</LinkWrapper>
						</Row>
					);
				}

				if (index === items.length - 1) {
					return (
						<Row key={`breadcurmbs_${index}`} gap={10} rWidth={"fit-content"}>
							{item.link != "" ? (
								<MenuItem href={item.link} title={item.title}></MenuItem>
							) : (
								<NonLinkWrapper>{item.title}</NonLinkWrapper>
							)}
						</Row>
					);
				}
				return (
					<Row key={`breadcurmbs_${index}`} gap={10} rWidth={"fit-content"}>
						{item.link != "" ? (
							<MenuItem href={item.link} title={item.title}></MenuItem>
						) : (
							<NonLinkWrapper>{item.title}</NonLinkWrapper>
						)}
						<LinkWrapper>
							<MdOutlineArrowForwardIos />
						</LinkWrapper>
					</Row>
				);
			})}
		</Row>
	);
};

export default Breadcrumbs;
