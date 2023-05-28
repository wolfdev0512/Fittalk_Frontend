import React from "react";
// type
import { IconProps } from "./types";
// --------------------------------
const UpIcon: React.FC<IconProps> = ({
	iSize = { x: 17, y: 11 },
	iColor = "white",
	stockWidth = 1.5,
}) => {
	return (
		<svg
			width={iSize?.x}
			height={iSize?.y}
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.552979 8.52197L8.53098 0.541972"
				stroke={iColor}
				strokeWidth={stockWidth}
			/>
			<path
				d="M15.511 8.52197L7.53296 0.541972"
				stroke={iColor}
				strokeWidth={stockWidth}
			/>
		</svg>
	);
};
const UpIcon2: React.FC<IconProps> = ({
	iSize = { x: 25, y: 25 },
	iColor = "white",
	stockWidth = 2,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={iSize?.x}
			height={iSize?.y}
			viewBox="0 0 24 24"
			fill="none"
			stroke={iColor}
			strokeWidth={stockWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="6 15 12 9 18 15" />
		</svg>
	);
};
const DownIcon: React.FC<IconProps> = ({
	iSize = { x: 17, y: 11 },
	iColor = "white",
	stockWidth = 1.5,
}) => {
	return (
		<svg
			width={iSize?.x}
			height={iSize?.y}
			viewBox="0 0 17 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.552979 1.52197L8.53098 9.49997"
				stroke={iColor}
				strokeWidth={stockWidth}
			/>
			<path
				d="M15.511 1.52197L7.53296 9.49997"
				stroke={iColor}
				strokeWidth={stockWidth}
			/>
		</svg>
	);
};
const DownIcon2: React.FC<IconProps> = ({
	iSize = { x: 25, y: 25 },
	iColor = "white",
	stockWidth = 2,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={iSize?.x}
			height={iSize?.y}
			viewBox="0 0 24 24"
			fill="none"
			stroke={iColor}
			strokeWidth={stockWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	);
};

export default { up: UpIcon, up2: UpIcon2, down: DownIcon, down2: DownIcon2 };
