import React from "react";
// type
import { IconProps } from "./types";
// --------------------------------

const OrderIcon: React.FC<IconProps> = ({
	iSize = { x: 16.379, y: 16.379 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16.379 16.379"
		>
			<g
				id="Group_3839"
				data-name="Group 3839"
				transform="translate(-0.5 -0.5)"
			>
				<path
					id="Path_3430"
					data-name="Path 3430"
					d="M1,16.379V5.614L4.076,1H13.3l3.076,4.614V16.379ZM1,5.614H16.379"
					fill="none"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit={10}
					strokeWidth={1}
				/>
				<path
					id="Path_3432"
					data-name="Path 3432"
					d="M31,1V5.614"
					transform="translate(-22.311)"
					fill="none"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit={10}
					strokeWidth={1}
				/>
			</g>
		</svg>
	);
};
export default OrderIcon;
