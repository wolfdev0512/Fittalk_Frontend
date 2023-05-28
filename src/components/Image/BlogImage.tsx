import React from "react";
import Image from "./Image";
import { ImageProps } from "./types";
type BlogMedia = {
	url: string;
	width: number;
	height: number;
};
const BlogImage: React.FC<ImageProps & { media: BlogMedia }> = ({
	media,
	...props
}) => {
	return (
		<Image
			width={media.width}
			height={media.height}
			src={media.url}
			{...props}
		/>
	);
};

export default BlogImage;
