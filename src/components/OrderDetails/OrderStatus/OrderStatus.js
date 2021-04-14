import classes from './OrderStatus.module.css';
import { CheckCircle } from '@material-ui/icons';

const OrderStatus = ({ status }) => {
	return (
		<div className={classes.OrderStatus}>
			<span
				className={`${classes.Pending} ${
					status === 'pending' || 'shipped' || 'delivered' ? classes.Completed : ''
				}`}
			>
				<div className={classes.IconBox}>
					<CheckCircle style={{ fontSize: '24' }} />
				</div>
				<span className={classes.Line}></span>
				<p>Pending</p>
			</span>
			<span
				className={`${classes.Shipped} ${
					status === 'shipped' || 'delivered' ? classes.Completed : ''
				}`}
			>
				<CheckCircle style={{ fontSize: '24' }} />
				<span className={classes.Line}></span>
				<p>Shipped</p>
			</span>
			<span className={`${classes.Delivered} ${status === 'delivered' ? classes.Completed : ''}`}>
				<CheckCircle style={{ fontSize: '24' }} />
				<span className={classes.Line}></span>
				<p>Delivered</p>
			</span>
		</div>
	);
};

export default OrderStatus;
