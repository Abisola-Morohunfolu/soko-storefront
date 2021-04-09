import * as React from 'react';
import ImageOverlayText from '../../UI/ImageOverlayText/ImageOverlayText';
import SliderDots from '../../UI/SliderDots/SliderDots';
import * as classes from './CategoriesSlider.module.css';

const CategoriesSlider = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0);

	const setSlider = (number) => {
		return setCurrentSlide(number);
	};
	return (
		<section className={classes.Section}>
			<div className={classes.SliderSection}>
				<ImageOverlayText
					title="Furniture"
					image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				/>
				<ImageOverlayText
					title="Furniture"
					image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				/>
				<ImageOverlayText
					title="Furniture"
					image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				/>
			</div>
			<SliderDots totalSlides={8} current={currentSlide} changeSlider={setSlider} />
		</section>
	);
};

export default CategoriesSlider;
