import * as classes from './SliderDots.module.css';

const SliderDots = ({ current, totalSlides, changeSlider }) => {
	const dotArray = [];

	// array to create slider dots
	// push object that has index to keep track of the current slide
	// key to differentiate dots
	for (let i = 0; i < totalSlides; i++) {
		dotArray.push({
			index: i,
			key: 'slide' + i,
		});
	}

	return (
		<div className={classes.DotContainer}>
			{dotArray.map((dot) => (
				<span
					key={dot.key}
					className={`${classes.Dot} ${dot.index === current ? classes.CurrentDot : ''}`}
					onClick={() => changeSlider(dot.index)}
				></span>
			))}
		</div>
	);
};

export default SliderDots;
