import * as classes from './Header.module.css';
import { Storefront } from '@material-ui/icons';

const HeaderText = (props) => {
	return (
		<div className={classes.HeaderTextConatainer}>
			<div className={classes.IconContainer}>
				<Storefront style={{ fontSize: 36, color: '#9d9d9d' }} />
			</div>
			<div className={classes.HeaderText}>
				<h1>{props.storeName}</h1>
				<p>{props.address}</p>
			</div>
		</div>
	);
};

export default HeaderText;
