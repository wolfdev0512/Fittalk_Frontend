import React from "react";
// Component
import { Row, Col } from "components/Layout";
import { Hidden } from "components/Hidden";
// HOC
import { useLinkItem } from "components/hoc";
// utils
import { getThisYear } from "utils/helper-date";
// styled component
import { BREAKPOINTS } from "theme/base";
import {
	CompanyAddress,
	CopyRightSectionWrapper,
	StyledLinkItem,
} from "./CopyRightSection.style";
// Genereted Componentby HOC
const LinkItem = useLinkItem(StyledLinkItem);

// ------------------------------------------------------
const { sm } = BREAKPOINTS;

const CopyRightSection = () => {
	return (
		<CopyRightSectionWrapper>
			<Row
				alignItems="center"
				justifyContent="space-between"
				responsive={{ [sm]: { flexDirection: "column", gap: 10 } }}
			>
				<CompanyAddress>
					©All rights reserved Nutrition Warehouse {getThisYear()}.
				</CompanyAddress>
				<Col>
					<Row alignItems="center" gap={5}>
						<Col>
							<LinkItem title="Terms & Conditions" href="/terms"></LinkItem>
						</Col>
						<Col>
							<Hidden wShow={[sm]}>|</Hidden>
						</Col>
						<Col>
							<LinkItem title="Privacy" href="/privacy"></LinkItem>
						</Col>
					</Row>
				</Col>
			</Row>
		</CopyRightSectionWrapper>
	);
};
export default CopyRightSection;
