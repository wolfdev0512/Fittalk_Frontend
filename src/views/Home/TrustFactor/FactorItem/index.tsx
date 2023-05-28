import React, { ReactNode } from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Hidden } from "components/Hidden";
// styled component
import { FactorItemWrapper, IconWrapper } from "./FactorItem.style";
import { BREAKPOINTS } from "theme/base";
// type
export interface FactorItemProps {
	title: string;
	description: string;
	icon: ReactNode;
}
const { md } = BREAKPOINTS;

// ----------------------------------------------------------
const FactorItem: React.FC<FactorItemProps> = ({
	title,
	description,
	icon,
}) => {
	return (
		<FactorItemWrapper justifyContent="center" alignItems="center">
			<Row
				alignItems="center"
				justifyContent="center"
				gap={10}
				padding="0 10px 0 0"
			>
				<Col>
					<IconWrapper>{icon}</IconWrapper>
				</Col>
				<Col>
					<Row flexDirection="column">
						<Text
							fontWeight={400}
							textTransform="uppercase"
							fontSize={12}
							lineHeight={1}
						>
							{title}
						</Text>
						<Hidden wHide={[md]}>
							<Text
								color="#637381"
								fontWeight={400}
								fontSize={11.2}
								lineHeight={1}
							>
								{description}
							</Text>
						</Hidden>
					</Row>
				</Col>
			</Row>
		</FactorItemWrapper>
	);
};
export default FactorItem;
