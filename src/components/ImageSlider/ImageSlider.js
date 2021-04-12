import * as React from 'react';
import SliderDots from '../UI/SliderDots/SliderDots';
import * as classes from './ImageSlider.module.css';

const ImageSlider = ({ children }) => {
	const [sliderIndex, setSliderIndex] = React.useState(0);
	const childrenArray = React.Children.toArray(children);

	return (
		<div className={classes.ImageSlider}>
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
