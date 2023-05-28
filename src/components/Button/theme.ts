import { scales, variants } from "./types";

export const scaleVariants = {
	[scales.MD]: {
		padding: "10px 25px",
	},
	[scales.SM]: {
		height: "25px",
		padding: "0 16px",
	},
	[scales.XS]: {
		height: "20px",
		fontSize: "12px",
		padding: "0 8px",
	},
};

export const styleVariants = {
	[variants.PRIMARY]: {
		backgroundColor: "primary.regular",
		color: "white",
	},
	[variants.OUTLINED]: {
		backgroundColor: "transparent",
		border: "1px solid",
		borderColor: "#c7cbd3",
		color: "black.dark",
	},
	[variants.SECONDARY]: {
		backgroundColor: "transparent",
		border: "2px solid",
		borderColor: "primary.regular",
		boxShadow: "none",
		color: "primary.regular",
		":disabled": {
			backgroundColor: "transparent",
		},
	},
	[variants.TERTIARY]: {
		backgroundColor: "tertiary",
		boxShadow: "none",
		color: "primary.regular",
	},
	[variants.SUBTLE]: {
		backgroundColor: "textSubtle",
		color: "white",
	},
	[variants.DANGER]: {
		backgroundColor: "failure",
		color: "white",
	},
	[variants.SUCCESS]: {
		backgroundColor: "success",
		color: "white",
	},
	[variants.TEXT]: {
		backgroundColor: "transparent",
		color: "primary.regular",
		boxShadow: "none",
	},
};
