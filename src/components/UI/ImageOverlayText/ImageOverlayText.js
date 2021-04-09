import * as classes from './ImageOverlayText.module.css';

const ImageOverlayText = (props) => {
	return (
		<div className={classes.ImageOverlayDiv}>
			<div className={classes.Overlay}></div>
			<img src={props.image} alt={props.title} className={classes.Image} />
			<h4 className={classes.Text}>{props.title}</h4>
		</div>
	);
};

export default ImageOverlayText;
