import * as classes from './Button.module.css';

const Button = ({ children, clicked }) => {
	return (
		<button className={classes.Button} onClick={clicked}>
			{children}
		</button>
	);
};

export default Button;
