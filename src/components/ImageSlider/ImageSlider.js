import * as React from 'react';
import SliderDots from '../UI/SliderDots/SliderDots';

const ImageSlider = ({ children }) => {
	const [sliderIndex, setSliderIndex] = React.useState(0);
	const childrenArray = React.Children.toArray(children);

	return (
		<div>
			{childrenArray[sliderIndex]}
			<SliderDots
				totalSlides={childrenArray.length}
				current={sliderIndex}
				changeSlider={setSliderIndex}
			/>
		</div>
	);
};

export default ImageSlider;
