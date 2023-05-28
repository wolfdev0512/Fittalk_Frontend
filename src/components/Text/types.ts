// types
import { HTMLAttributes } from "react";
import { SpaceProps, TypographyProps, DisplayProps } from "styled-system";

export const tags = {
	p: "p",
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	a: "a",
	span: "span",
};

export type Tags = keyof typeof tags;

export interface TextProps
	extends SpaceProps,
		TypographyProps,
		DisplayProps,
		HTMLAttributes<HTMLParagraphElement> {
	as?: Tags;
	pointered?: boolean;
	hColor?: string | undefined;
	tDecorations?: "line-through" | "initial" | "underline";
	textTransform?: "uppercase" | "lowercase" | "capitalize";
	href?: string;
}
