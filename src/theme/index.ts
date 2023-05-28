import { DefaultTheme } from "styled-components";
import base from "./base";

import {
	Breakpoints,
	FontSizes,
	FontWeights,
	Fonts,
	MediaQueries,
	Radii,
	Shadows,
	Spacing,
	Transitions,
} from "./types";

import lightColor from "./light/colors";

export interface FittalkTheme {
	siteWidth: number;
	isDark: boolean;
	breakpoints: Breakpoints;
	mediaQueries: MediaQueries;
	spacing: Spacing;
	radii: Radii;
	fonts: Fonts;
	fontSizes: FontSizes;
	fontWeights: FontWeights;
	colors: any;
	transition: Transitions;
	shadows: Shadows;
}

export const defaultTheme: DefaultTheme = {
	...base,
	isDark: false,
	colors: {
		...lightColor,
	},
};

export const SITEWIDTH = base.siteWidth;
