import * as classes from './Button.module.css';

const Button = ({ children, clicked, bgColor, labelColor }) => {
	return (
		<button
			className={`${classes.Button}`}
			style={{ backgroundColor: bgColor, color: labelColor }}
			onClick={clicked}
		>
			{children}
		</button>
	);
};

export const OutlineButton = ({ clicked, children }) => {
	return (
		<button onClick={clicked} className={classes.OutlineButton}>
			{children}
		</button>
	);
};

export const CollapsableButton = ({ children, clicked, bgColor, labelColor }) => {
	return (
		<button
			onClick={clicked}
			className={classes.CollapsableButton}
			style={{ backgroundColor: bgColor, color: labelColor }}
		>
			{children}
		</button>
	);
};

export default Button;
