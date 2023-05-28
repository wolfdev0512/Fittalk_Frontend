import React, { ComponentType, PropsWithChildren } from "react";
//  Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import SwiperCore, { Parallax, Pagination, Autoplay, Navigation } from "swiper";

// types
import { SliderProps, SliderOptions } from "../types";
// styled component
import { BannerWrapper } from "./useSlider.style";
// install Swiper modules
SwiperCore.use([Parallax, Pagination, Autoplay, Navigation]);

// -----------------------------------------------------------------------------

const CommonSlider =
	<DataType,>(
		ItemWrapper: ComponentType<DataType>,
		options: SliderOptions = {},
		SwiperWrapper: ComponentType<PropsWithChildren<any>> = BannerWrapper
	): React.FC<SliderProps<DataType>> =>
	// eslint-disable-next-line react/display-name
	({ sliderData = [], itemOptions }) => {
		return (
			<SwiperWrapper>
				<Swiper {...options}>
					<div
						slot="container-start"
						className="parallax-bg"
						data-swiper-parallax="-23%"
					></div>
					{sliderData.map((item, index) => (
						<SwiperSlide key={`bannerSlier_${index}`}>
							<ItemWrapper {...itemOptions} {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperWrapper>
		);
	};

export default CommonSlider;
