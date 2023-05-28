import { AccordionType } from "components/Collapse";
// assets
import OrdertrackingImage from "assets/images/layout/nwh-svg-icon-ordertracking--red.svg";
import CollectImage from "assets/images/layout/nwh-svg-icon-cnc_25x25.webp";

const linkData: Array<AccordionType> = [
	{
		title: "Categories",
		children: [
			{
				title: "Protein",
				children: [
					{
						title: "Top 10 Proteins",
						param: "/collections/top-10-protein-powders",
					},
					{
						title: "Whey Protein Blends",
						param: "/collections/whey-protein-blends",
					},
					{
						title: "Whey Protein Isolate",
						param: "/collections/whey-protein-isolate",
					},
					{
						title: "Weight Gainers",
						param: "/collections/weight-gainers",
					},
					{
						title: "Weight Loss Protein",
						param: "/collections/weight-loss-protein",
					},
					{
						title: "Natural Protein",
						param: "/collections/natural-protein",
					},
					{
						title: "Plant Based Protein",
						param: "/collections/plant-based-protein",
					},
					{
						title: "Womens Protein",
						param: "/collections/womens-protein",
					},
					{
						title: "Protein Bars & Cookies",
						param: "/collections/protein-bars-cookies",
					},
					{
						title: "Casein Protein",
						param: "/collections/casein-protein",
					},
					{
						title: "Pea Protein",
						param: "/collections/pea-protein",
					},
					{
						title: "Post Workout Protein",
						param: "/collections/post-workout-protein",
					},
					{
						title: "Rice Protein",
						param: "/collections/rice-protein",
					},
					{
						title: "Soy Protein",
						param: "/collections/soy-protein",
					},
					{
						title: "Whey Concentrate (WPC)",
						param: "/collections/whey-concentrate-wpc",
					},
					{
						title: "Whey Hydrolysate",
						param: "/collections/whey-hydrolysate",
					},
					{
						title: "Beef Protein",
						param: "/collections/beef-protein",
					},
					{
						title: "Egg Protein",
						param: "/collections/egg-protein",
					},
					{
						title: "Meal Replacement",
						param: "/collections/meal-replacement",
					},
				],
			},
			{
				title: "Sports Nutrition",
				children: [
					{
						param: "/collections/pre-workout",
						title: "Pre Workout",
					},
					{
						param: "/collections/amino-acids",
						title: "Amino Acids",
					},
					{
						param: "/collections/creatine",
						title: "Creatine",
					},
					{
						param: "/collections/carbohydrates",
						title: "Carbohydrates",
					},
					{
						param: "/collections/nitric-oxide-boosters",
						title: "Nitric Oxide Boosters",
					},
					{
						param: "/collections/post-workout",
						title: "Post Workout",
					},
					{
						param: "/collections/endurance",
						title: "Endurance",
					},
					{
						param: "/collections/nootropics",
						title: "Nootropics",
					},
					{
						param: "/collections/intra-workout",
						title: "Intra Workout",
					},
				],
			},
			{
				title: "More Categories",
				children: [
					{ title: "Workout Apparel", param: "/collections/workout-apparel" },

					{ title: "Accessories", param: "/collections/accessories" },

					{
						title: "Healthy Snacks & Foods",
						param: "/collections/healthy-snacks-foods",
					},

					{ title: "Test Boosters", param: "/collections/test-boosters" },

					{ title: "Supp Awards", param: "/collections/supp-awards" },

					{
						title: "Genetix Pure Series",
						param: "/collections/genetix-pure-series",
					},

					{ title: "Genetix Protein", param: "/collections/genetix-protein" },

					{
						title: "Vegan Fat Burners",
						param: "/collections/vegan-fat-burners",
					},

					{ title: "Bundles", param: "/collections/bundles" },
				],
			},
			{
				title: "Health & Vitamins",
				children: [
					{ title: "General Health", param: "/collections/general-health" },
					{
						title: "Vitamins & Minerals",
						param: "/collections/vitamins-minerals",
					},
					{ title: "Sleep Aids", param: "/collections/sleep-aids" },
					{ title: "Hormonal Support", param: "/collections/hormonal-support" },
				],
			},
			{
				title: "Weight Loss",
				children: [
					{ title: "Fat Burners", param: "/collections/fat-burners" },
					{
						title: "Womens Weight Loss",
						param: "/collections/womens-weight-loss",
					},
					{ title: "L-Carnitine", param: "/collections/l-carnitine" },
					{
						title: "Acetyl L-Carnitine",
						param: "/collections/acetyl-l-carnitine",
					},
					{ title: "Fat Metabolisers", param: "/collections/fat-metabolisers" },
					{ title: "Keto", param: "/collections/keto" },
					{
						title: "Appetite Suppressant",
						param: "/collections/appetite-suppressant",
					},
					{ title: "CLA", param: "/collections/cla" },
					{ title: "Diuretics", param: "/collections/diuretics" },
				],
			},
		],
	},
	{
		title: "Brands",
		param: "/pages/brands",
	},
	{
		title: "SPECIALS",
		param: "/pages/specials",
	},
	{
		title: "New",
		param: "/collections/new",
	},
	{
		title: "FIT TALK",
		param: "https://fittalk.nutritionwarehouse.com.au",
	},
];

export const MenuLinks: Array<AccordionType> = [
	...linkData,
	{
		title: "Pickup & Delivery",
		children: [
			{
				title: "Click and Collect",
				data: CollectImage,
				param: "https://industry.nutritionwarehouse.com.au/ambassadors/",
			},
			// {
			// 	title: "Track my order",
			// 	data: OrdertrackingImage,
			// 	param: "pages/careers",
			// },
		],
	},
];
export const FooterLinks: Array<AccordionType> = [
	...linkData,
	{
		title: "SITE",
		children: [
			{
				title: "Best Price Guarantee",
				param: "pages/best-price-guarantee",
			},
			{
				title: "Supplement Awards",
				param: "pages/supplement-award-winners-2022",
			},
			{
				title: "Max's & Maxine's M Challenge",
				param: "pages/max-and-maxine-challenge",
			},
			{
				title: "Defence Force V.I.P",
				param: "pages/defence-force-vip",
			},
			{
				title: "Wholesale Enquires",
				param: "https://industry.nutritionwarehouse.com.au/wholesale/",
			},
			{
				title: "Personal Trainer Discounts",
				param: "https://industry.nutritionwarehouse.com.au/personal-trainers/",
			},
			{
				title: "Become a NW Ambassador",
				param: "https://industry.nutritionwarehouse.com.au/ambassadors/",
			},
			{
				title: "Careers",
				param: "pages/careers",
			},
		],
	},
];
