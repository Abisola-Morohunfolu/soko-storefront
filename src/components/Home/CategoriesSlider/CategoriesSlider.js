import * as React from 'react';
import { CategoriesArray } from '../../../utils/static-data';
import ImageOverlayText from '../../UI/ImageOverlayText/ImageOverlayText';
import ImageSlider from '../../ImageSlider/ImageSlider';
import * as classes from './CategoriesSlider.module.css';

const CategoriesSlider = () => {
	// const [currentSlide, setCurrentSlide] = React.useState(0);

	// const setSlider = (number) => {
	// 	return setCurrentSlide(number);
	// };
	return (
		<section className={classes.Section}>
			<ImageSlider>
				<div className={classes.SliderSection}>
					{CategoriesArray.map((category, index) => {
						if (index <= 2) {
							return <ImageOverlayText title={category.category} image={category.image} />;
						}
						return null;
					})}
				</div>
				<div className={classes.SliderSection}>
					{CategoriesArray.map((category, index) => {
						if (index > 2 && index <= 5) {
							return <ImageOverlayText title={category.category} image={category.image} />;
						}
						return null;
					})}
				</div>
			</ImageSlider>
		</section>
	);
};

export default CategoriesSlider;
