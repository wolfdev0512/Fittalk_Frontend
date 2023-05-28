import React from "react";
// components
import { Container, WithContainer } from "components/Container";
import { Image } from "components/Image";
import { Row, Col } from "components/Layout";
import { SearchInput } from "components/Input";
// import { CartState } from "components/State";
// hook
import { useRouter } from "hooks";
// views
import { MenuView } from "views/Layout/Header/Menu";
// HOC
import { useLinkItem } from "components/hoc";
// assets
import { LocationIcon, AccountIcon } from "assets/icon";
import LogoImage from "assets/images/layout/Logo.svg";
// styled component
import {
	HeaderNavWrapper,
	HeaderMenuItem,
	LogoDWrapper,
	HeaderMenuWrapper,
} from "./Header.style";

// -------------------------------------------------------------------
const MenuItem = useLinkItem(HeaderMenuItem);

const HeaderView: React.FC = () => {
	const { move } = useRouter();
	return (
		<>
			<HeaderNavWrapper>
				<Container>
					<Row alignItems="center" justifyContent="space-between" gap={10}>
						<LogoDWrapper>
							<Image
								src={LogoImage}
								height={72}
								width={143}
								onClick={() => move("/")}
							/>
						</LogoDWrapper>
						<Col flex="1" mWidth={355}>
							<SearchInput />
						</Col>
						<Col>
							<MenuItem
								title="FIND A STORE"
								icon={<LocationIcon />}
								iconGaping={11}
							/>
						</Col>
						<Col>
							<MenuItem
								title="MY ACCOUNT"
								icon={<AccountIcon.Account />}
								iconGaping={11}
							/>
						</Col>
						{/* <Col>
							<CartState />
						</Col> */}
					</Row>
				</Container>
			</HeaderNavWrapper>
			<HeaderMenuWrapper>
				<WithContainer SectionView={MenuView} />
			</HeaderMenuWrapper>
		</>
	);
};

const Header = React.memo(HeaderView);
export default Header;
