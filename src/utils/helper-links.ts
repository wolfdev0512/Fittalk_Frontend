const httpsRegx = /(https?|http):\/\/[^/]+/;

export const getLink = (link = "", baseLink = "") => {
	const isFullLink = httpsRegx.test(link);
	return isFullLink ? link : (baseLink + "/" + link).replaceAll("//", "/");
};
