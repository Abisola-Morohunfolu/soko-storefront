import * as classes from './SmallTextHeading.module.css';

const SmallTextHeading = (props) => {
	return (
		<>
			<h6 className={classes.Heading}>{props.text}</h6>
		</>
	);
};

export default SmallTextHeading;
