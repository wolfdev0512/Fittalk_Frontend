import { MediaQueries, Breakpoints, Spacing } from "./types";

export const BREAKPOINTS = {
	xxs: 376,
	xs: 426,
	sm: 581,
	md: 769,
	lg: 1025,
	xl: 1441,
};

const breakpoints: Breakpoints = Object.values(BREAKPOINTS).map(
	(breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
	xxs: `@media screen and (max-width: ${BREAKPOINTS.xxs}px)`,
	xs: `@media screen and (max-width: ${BREAKPOINTS.xs}px)`,
	sm: `@media screen and (max-width: ${BREAKPOINTS.sm}px)`,
	md: `@media screen and (max-width: ${BREAKPOINTS.md}px)`,
	lg: `@media screen and (max-width: ${BREAKPOINTS.lg}px)`,
	xl: `@media screen and (max-width: ${BREAKPOINTS.xl}px)`,
	nav: `@media screen and (max-width: ${BREAKPOINTS.lg}px)`,
};

// 	${({ theme }) => theme.mediaQueries.xxs} {

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
	small: "4px",
	default: "10px",
	card: "32px",
	circle: "50%",
};

const zIndices = {
	dropdown: 10,
	modal: 100,
};

const fonts = {
	base: '"Inter" , sans-serif !important',
	changa: '"Changa" , sans-serif !important',
	roboto: '"Roboto" , sans-serif !important',
	exodemibold: '"Exo" , sans-serif !important',
	inter: '"Inter" , sans-serif !important',
};

const transition = {
	normal: "all .1s ease-in-out",
};

const fontSizes = {
	ms: 10,
	xs: 12,
	sm: 13,
	base: 16,
	md: 18,
	xl: 20,
	"2xl": 26,
	"3xl": 42,
};

const fontWeights = {
	thin: 100,
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	bolder: 800,
	boldest: 900,
};

export const shadows = {
	level1:
		"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
	active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
	success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
	warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
	focus: "0px 0px 0px 0.5px #e31e3188, 0px 0px 0px 2px #e31e3199",
	inset: "inset 0px 1px 1px -1px rgba(74, 74, 104, 0.1)",
};

export default {
	siteWidth: 1200,
	shadows,
	breakpoints,
	transition,
	mediaQueries,
	spacing,
	radii,
	fonts,
	fontWeights,
	fontSizes,
	zIndices,
};
