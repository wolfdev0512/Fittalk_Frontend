import React from "react";
// component
import { Text } from "components/Text";
import { Row } from "components/Layout";
import { StarBar } from "components/StarBar";
import { Image } from "components/Image";
//  types
import { ProductCardProps } from "../types";
// styled component
import { ProductWrapper, ProductInfoContainer } from "./Product.style";

// ----------------------------------------------------

const ProductCard: React.FC<ProductCardProps> = ({
	rate = 0,
	title,
	productImage,
	price,
	prePrice,
	productWidth = 216,
	productHeight = 175,
}) => {
	return (
		<ProductWrapper>
			<ProductInfoContainer>
				<Row flexDirection="column" alignItems="center">
					<Image
						src={productImage}
						height={productHeight}
						width={productWidth}
						oFit="contain"
					></Image>
					<Text
						textAlign="center"
						color="textDark"
						textTransform="uppercase"
						fontSize={14}
						fontWeight={400}
					>
						{title}
					</Text>
				</Row>
			</ProductInfoContainer>
			<Row
				alignItems="center"
				flexDirection="column"
				padding="26px 0 0 0"
				gap={10}
			>
				<StarBar rate={rate} />
				<Row justifyContent="center" alignItems="center" gap={10}>
					<Text
						textAlign="center"
						color="textDark"
						fontSize={18}
						fontWeight={900}
					>
						{price}
					</Text>
					{prePrice && (
						<Text
							textAlign="center"
							color="text"
							fontWeight={900}
							tDecorations="line-through"
							fontSize={16}
						>
							{prePrice}
						</Text>
					)}
				</Row>
			</Row>
		</ProductWrapper>
	);
};
export default ProductCard;
