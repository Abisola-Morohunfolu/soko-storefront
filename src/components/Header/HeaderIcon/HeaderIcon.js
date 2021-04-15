import { Link } from 'react-router-dom';
import classes from './HeaderIcon.module.css';

const HeaderIcon = (props) => {
	return (
		<Link t0={`/${props.label}`} className={classes.HeaderIcon}>
			{props.children}
			<h5>{props.label}</h5>
		</Link>
	);
};

export default HeaderIcon;
