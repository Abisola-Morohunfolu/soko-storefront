import * as classes from './Button.module.css';
import { Add } from '@material-ui/icons';

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

export const OutlineButton = ({ clicked }) => {
	return (
		<button onClick={clicked} className={classes.OutlineButton}>
			<Add />
			<span>Add</span>
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
