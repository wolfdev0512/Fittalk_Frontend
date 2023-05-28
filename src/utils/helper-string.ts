// type
import { SortedTypeByAlpha } from "types/utils/helper-type";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const truncate = (str: string, max = 10, showDots = true) => {
	if (str) {
		if (str.length > max) {
			return showDots ? str.substr(0, max) + " ..." : str.substr(0, max);
		} else {
			return str;
		}
	}
	return " ";
};

export const getGroupByAlpha = <T>(
	rawData,
	key = "title"
): Array<SortedTypeByAlpha<T>> => {
	const data = rawData.reduce((r, e) => {
		const group = e[key][0];
		if (!r[group]) r[group] = { group, children: [e] };
		else r[group].children.push(e);
		return r;
	}, {});
	return Object.values(data);
};

export const getID = (fullId, type) => {
	return parseInt(fullId.replace(`gid://shopify/${type}/`, ""));
};

export const _returnHtmlFromRichText = (richText) => {
	const tagRegExp = /<([^<>]*?)>/g;
	if (
		richText === undefined ||
		richText === null ||
		richText.nodeType !== "document"
	) {
		return "<p>Error</p>";
	}
	return documentToHtmlString(richText).replace(tagRegExp, "");
};

export const getItem = (value, symbol = "px") => {
	if (typeof value == "string") {
		return value;
	} else {
		return value + symbol;
	}
};
