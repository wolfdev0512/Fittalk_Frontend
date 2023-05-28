export interface InitialProps {
	padding?: string;
	fontSize?: number;
	fontWeight?: number;
	color?: string;
	fStyle?: "italic" | "normal";
	tAlign?: "center" | "left" | "right";
	fontFamily?: "base" | "changa" | "roboto" | "exodemibold" | "inter";
	display?: string;
	textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
	mWidth?: number;
	zIndex?: number;
	className?: string;
	cursor?: string;
	[key: string]: unknown;
}
