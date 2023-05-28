import React from "react";
// component
import { Text } from "components/Text";
import { Row, Col } from "components/Layout";
// hook
import { useRouter, useSideBar } from "hooks";
// types
import { CollapseWrapperProps } from "components/Collapse";
// helper
import { isEmpty } from "utils/helper-validation";
// assets
import { ArrowsIcon } from "assets/icon";
// styled component
import { MenuHeaderWrapper } from "./MenuHeader.style";

// -----------------------------------------------------------

const Accordion: React.FC<CollapseWrapperProps> = ({
	hide,
	title,
	param,
	children,
}) => {
	const { move } = useRouter();
	const { closeTopBar } = useSideBar();

	return (
		<MenuHeaderWrapper
			onClick={() => {
				closeTopBar();
				if (param != "") move(param);
			}}
			className="accordionHeader"
		>
			<Row justifyContent="space-between" alignItems="center">
				<Col>
					<Text
						fontSize={14}
						fontWeight={700}
						color="black.dark"
						textTransform="uppercase"
					>
						{title}
					</Text>
				</Col>
				{!isEmpty(children) && (
					<>
						{hide ? (
							<ArrowsIcon.up
								iSize={{ x: 12, y: 14 }}
								iColor="#000"
								stockWidth={3.5}
							/>
						) : (
							<ArrowsIcon.down
								iSize={{ x: 12, y: 14 }}
								iColor="#000"
								stockWidth={3.5}
							/>
						)}
					</>
				)}
			</Row>
		</MenuHeaderWrapper>
	);
};
export default Accordion;
