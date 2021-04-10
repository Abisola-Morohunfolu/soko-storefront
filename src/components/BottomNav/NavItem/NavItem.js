import { NavLink } from 'react-router-dom';
import * as classes from './NavItem.module.css';

const NavItem = (props) => {
	return (
		<NavLink exact to={props.path} className={classes.Link} activeClassName={classes.ActiveLink}>
			{props.children}
			<h4>{props.label}</h4>
		</NavLink>
	);
};

export default NavItem;
