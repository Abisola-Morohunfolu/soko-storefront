import classes from './SelectButton.module.css';

const SelectButton = (props) => {
	const selected = props.value === props.currentValue;
	return (
		<button
			className={`${classes.SelectButton} ${selected ? classes.Selected : ''}`}
			onClick={props.clicked}
		>
			{props.value}
		</button>
	);
};

export const SelectColorButton = (props) => {
	const selected = props.color === props.currentColor;
	return (
		<button className={classes.SelectColorButton} onClick={props.clicked}>
			<span
				style={{ backgroundColor: props.color }}
				className={`${selected ? classes.SelectedColor : ''}`}
			></span>
		</button>
	);
};

export default SelectButton;
