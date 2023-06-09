import React from "react";
// component
import { SliderOptions, useSlider } from "components/Slider";
// items
import FactorItem, { FactorItemProps } from "./FactorItem";
// styled component
import { FactorWrapper } from "./TrustFactor.style";
import {
	ShippingIcon,
	ClockIcon,
	ReturnIcon,
	RewardsIcon,
	StudentIcon,
} from "assets/icon";
import { BREAKPOINTS } from "theme/base";

const { md } = BREAKPOINTS;

const options: SliderOptions = {
	speed: 600,
	freeMode: true,
	slidesPerView: 1,
	spaceBetween: 10,

	autoplay: true,
	breakpoints: {
		[md]: { slidesPerView: "auto" },
	},
};

// component generated by hoc
const ProductSlider = useSlider<FactorItemProps>(FactorItem, options);

// -------------------------------------------------
const FactorView = () => {
	const factorList: Array<FactorItemProps> = [
		{
			title: "5 Scoop Guarantee",
			description: "30 Day Returns",
			icon: <ReturnIcon />,
		},
		{
			title: "REWARDS PROGRAM",
			description: "Real $ rewards for every purchase",
			icon: <RewardsIcon.Program />,
		},
		{
			title: "Free Shipping / GIFT",
			description: "On all orders over $150",
			icon: <ShippingIcon />,
		},
		{
			title: "Sameday Dispatch",
			description: "When you order before 3pm Mon - Fri (AEST)",
			icon: <ClockIcon />,
		},
		{
			title: "Student discount",
			description: "10% Off + FREE Shaker",
			icon: <StudentIcon />,
		},
	];
	return (
		<FactorWrapper>
			<ProductSlider sliderData={factorList} />
		</FactorWrapper>
	);
};
export default FactorView;
