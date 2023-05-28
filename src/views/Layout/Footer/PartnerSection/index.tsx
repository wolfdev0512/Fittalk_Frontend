import React from "react";
// Component
import { Image } from "components/Image";
import { useSlider } from "components/Slider";
// brand Item
import BrandItem, { BrandProps } from "./BrandItem";
// assets
import AfterpayImage from "assets/images/layout/Afterpay.png";
import KlarnaImage from "assets/images/layout/Klarna.webp";
import ShopImage from "assets/images/layout/Shop.png";
import PaypalImage from "assets/images/layout/Paypal.png";
import AppleImage from "assets/images/layout/Apple.webp";
import VisaImage from "assets/images/layout/Visa.png";
import MasterImage from "assets/images/layout/master.png";
import AmericanImage from "assets/images/layout/American.png";
import GooglepayImage from "assets/images/layout/Googlepay.png";

// styled component
import { PartnerSectionWrapper } from "./PartnerSection.style";
import { BREAKPOINTS } from "theme/base";

// Genereted Componentby HOC
const { md, xs } = BREAKPOINTS;

const options = {
	speed: 600,
	slidesPerView: 3,
	spaceBetween: 9,
	freeMode: true,
	autoplay: true,
	breakpoints: {
		[xs]: {
			slidesPerView: 5,
		},
		[md]: {
			slidesPerView: 9,
		},
	},
};
const BrandSlider = useSlider<BrandProps>(BrandItem, options);

// ------------------------------------------------------
const brandData: Array<BrandProps> = [
	{
		icon: (
			<Image src={AfterpayImage} oFit="contain" width={65} height={13}></Image>
		),
	},
	{
		icon: (
			<Image src={KlarnaImage} oFit="contain" width={65} height={14.3}></Image>
		),
	},
	{
		icon: <Image src={ShopImage} oFit="contain" width={65} height={20}></Image>,
	},
	{
		icon: (
			<Image src={PaypalImage} oFit="contain" width={65} height={17}></Image>
		),
	},
	{
		icon: (
			<Image src={AppleImage} oFit="contain" width={65} height={24}></Image>
		),
	},
	{
		icon: <Image src={VisaImage} oFit="contain" width={65} height={21}></Image>,
	},
	{
		icon: (
			<Image src={MasterImage} oFit="contain" width={65} height={24}></Image>
		),
	},
	{
		icon: (
			<Image src={AmericanImage} oFit="contain" width={65} height={24}></Image>
		),
	},
	{
		icon: (
			<Image src={GooglepayImage} oFit="contain" width={65} height={24}></Image>
		),
	},
];

const PartnerSection = () => {
	return (
		<PartnerSectionWrapper>
			<BrandSlider sliderData={brandData} />
		</PartnerSectionWrapper>
	);
};
export default PartnerSection;
