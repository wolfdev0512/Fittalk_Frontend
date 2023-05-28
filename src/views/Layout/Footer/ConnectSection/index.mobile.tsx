import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Hidden } from "components/Hidden";
// hook
import { useRouter } from "hooks";
// HOC
import LogoImage from "assets/images/layout/Logo.svg";

// styled component
import { ConnectionSectionWrapper } from "./ConnectSection.style";
import { BREAKPOINTS } from "theme/base";
// --------------------------------------------------

const ConnectSection = () => {
	const { move } = useRouter();

	return (
		<Hidden wShow={[BREAKPOINTS.md]}>
			<ConnectionSectionWrapper>
				<Row flexDirection="column" padding="0 0 12px 0" gap={10}>
					<Col>
						<Image
							src={LogoImage}
							height={72}
							width={143}
							onClick={() => move("/")}
						/>
					</Col>
					<Col>
						<Row flexDirection="column">
							<Text
								fontSize={25}
								fontWeight={700}
								color="white"
								fontFamily="changa"
								textTransform="uppercase"
							>
								Customer Support
							</Text>

							<Text fontSize={16} fontWeight={700}>
								1300 837 785
							</Text>
						</Row>
					</Col>
				</Row>
			</ConnectionSectionWrapper>
		</Hidden>
	);
};

export default ConnectSection;
