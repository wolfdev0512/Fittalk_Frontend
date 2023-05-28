import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Hidden } from "components/Hidden";
import { useAccordion } from "components/Collapse";
// HOC
import { useLinkItem } from "components/hoc";
// static data
import { footerLinkData, FooterLinks } from "utils/constData";
// types

// views
import {
	AccordionHeaderForDeep1,
	AccordionHeaderForDeep2,
	AccordionHeaderForDeep3,
} from "./AccordionHeader";

// styled-component
import { BREAKPOINTS } from "theme/base";
import {
	LinkSectionWrapper,
	CategoryItemHeader,
	CategoryItem,
} from "./LinkSection.style";

// Genereted Componentby HOC
const LinkItem = useLinkItem(CategoryItem);

const wrappers = [
	AccordionHeaderForDeep1,
	AccordionHeaderForDeep2,
	AccordionHeaderForDeep3,
];
const Accordion = useAccordion(wrappers);

// ------------------------------------------------------------------
const { lg, sm } = BREAKPOINTS;

const LinkSection = () => {
	return (
		<LinkSectionWrapper>
			<Hidden wHide={[sm]}>
				<Row responsive={{ [lg]: { flexWrap: "wrap" } }}>
					{footerLinkData.map((_LinkData, idx) => (
						<Col
							item={4}
							key={`footerlinks_${idx}`}
							responsive={{ [lg]: { item: 8 } }}
						>
							<Row flexDirection="column" mWidth={170} padding="0 0 30px 0">
								<Col>
									<CategoryItemHeader>{_LinkData.title}</CategoryItemHeader>
								</Col>
								<Col>
									{_LinkData?.items?.map((item, index) => (
										<LinkItem
											title={item?.title}
											key={`footersite_${index}`}
											href={item?.url}
										/>
									))}
								</Col>
							</Row>
						</Col>
					))}
				</Row>
			</Hidden>
			<Hidden wShow={[sm]}>
				<Accordion items={FooterLinks} />
			</Hidden>
		</LinkSectionWrapper>
	);
};
export default LinkSection;
