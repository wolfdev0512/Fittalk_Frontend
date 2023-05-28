import React from "react";
// type
import { IconProps } from "./types";
import { Svg } from "components/Svg";
// --------------------------------
const AccountIcon: React.FC<IconProps> = ({
	iColor = "#E31E31",
	iSize = { x: 17, y: 21 },
}) => {
	return (
		<svg
			width={iSize?.x}
			height={iSize?.y}
			viewBox="0 0 17 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.17277 12.5516C2.12996 13.8448 0 16.8876 0 20.3868H1.5214C1.5214 16.5833 4.64028 13.4644 8.44379 13.4644C12.2473 13.4644 15.3662 16.5833 15.3662 20.3868H16.8876C16.8876 16.8876 14.7576 13.8448 11.7148 12.6276C13.7687 11.4866 15.138 9.28055 15.138 6.77024C15.138 3.0428 12.1712 0 8.44379 0C4.71635 0 1.74961 3.04281 1.74961 6.69418C1.74961 9.2045 3.11887 11.4105 5.17277 12.5516V12.5516ZM8.44379 1.52139C11.3345 1.52139 13.6166 3.87957 13.6166 6.69416C13.6166 9.50876 11.2584 11.8669 8.44379 11.8669C5.62919 11.8669 3.27102 9.50875 3.27102 6.69416C3.27102 3.87956 5.55312 1.52139 8.44379 1.52139Z"
				fill={iColor}
			/>
		</svg>
	);
};

const SoAccountIcon: React.FC<IconProps> = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
const CreateAccountIcon: React.FC<IconProps> = (props) => {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			width={16}
			height={16}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
			></path>
		</Svg>
	);
};
export default {
	Account: AccountIcon,
	SoAccount: SoAccountIcon,
	CreateAccountIcon: CreateAccountIcon,
};
