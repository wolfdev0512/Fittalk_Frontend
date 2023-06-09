import React from "react";

// next
import Image from "next/image";

// type
import { ImageProps, ImagePlaceholderProps } from "./types";

// styeld component
import {
  ImageWrapper,
  ImageInner,
  EmptyImage,
  ImageNormalWrapper,
} from "./Image.style";

// helper
import { isEmpty } from "utils/helper-validation";

// ----------------------------------------------------
const ImageComponent: React.FC<ImageProps> = ({
  src = "",
  alt = "No Image, Please reload.",
  width = 0,
  height = 0,
  mode = "intrinsic",
  oFit = "fill",
  quality = 75,
  priority = false,
  loadOption,
  oPosition = "initial",
  className,
  ...props
}) => {
  if (isEmpty(src)) {
    return <EmptyImage style={{ width: width, height: height }}></EmptyImage>;
  }
  const blurUrl = (typeof src === "object" ? src.src : src) + "?q=10";
  const blurProperty: ImagePlaceholderProps =
    width < 40 || height < 40
      ? {}
      : { placeholder: "blur", blurDataURL: blurUrl };
  return mode === "fill" ? (
    <ImageWrapper className={className} {...props}>
      <ImageInner>
        <Image
          src={src}
          layout={mode}
          alt={alt}
          objectFit={oFit}
          quality={quality}
          loading={loadOption}
          priority={priority}
          objectPosition={oPosition}
          {...blurProperty}
        />
      </ImageInner>
    </ImageWrapper>
  ) : (
    <ImageNormalWrapper className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={mode}
        objectFit={oFit}
        quality={quality}
        loading={loadOption}
        priority={priority}
        objectPosition={oPosition}
        {...blurProperty}
        {...props}
      />
    </ImageNormalWrapper>
  );
};
export default ImageComponent;
