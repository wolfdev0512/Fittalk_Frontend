// types
import { SeoProps } from "components/Seo";

// -------------------------------------------

const informations = {
	home: {
		title: "Nutrition Warehouse - Big Brands, Warehouse Prices!",
		description:
			"Buy your sports and bodybuilding supplements, whey protein powder at Australia's leading discount supplements warehouse.",
	},
	ByBlog: {
		title: "Nutrition Warehouse - Big Brands, Warehouse Prices!",
		description:
			"Buy your sports and bodybuilding supplements, whey protein powder at Australia's leading discount supplements warehouse.",
	},
	ByTag: {
		title: "Nutrition Warehouse - Big Brands, Warehouse Prices!",
		description:
			"Buy your sports and bodybuilding supplements, whey protein powder at Australia's leading discount supplements warehouse.",
	},
};
export const getInformation = (page: string): SeoProps => {
	if (informations[page]) {
		return informations[page];
	} else {
		return {
			title: "",
			description: "",
			canonical: "",
			keywords: "",
			css: "",
			js: "",
			image: "",
		};
	}
};
