import classes from './OrderCard.module.css';
import { Storefront } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const OrderStatus = ({ status }) => {
	switch (status) {
		case 'shipped':
			return (
				<span className={classes.Shipped}>
					<span style={{ backgroundColor: '#ff914d' }}></span>
					{status}
				</span>
			);
		case 'pending':
			return (
				<span className={classes.Pending}>
					<span></span>
					{status}
				</span>
			);
		case 'delivered':
			return (
				<span className={classes.Delivered}>
					<span></span>
					{status}
				</span>
			);
		case 'cancelled':
			return (
				<span className={classes.Cancelled}>
					<span></span>
					{status}
				</span>
			);
		case 'accepted':
			return (
				<span className={classes.Accepted}>
					<span></span>
					{status}
				</span>
			);
		default:
			return null;
	}
};

export const MobileOrderCard = (props) => {
	return (
		<Link to={`/orders/${props.orderId}`} className={classes.MobileOrderCard}>
			<div>
				<h6 className={classes.Heading}>{props.customerName}</h6>
				<p className={classes.Text}>
					{props.totalItems} {props.totalItems > 1 ? 'items' : 'item'}
				</p>
				<p className={classes.Text}>
					{props.currency} {props.total}
				</p>
			</div>
			<div className={classes.MobileOrderDetails}>
				<span className={classes.MobileOrderTime}>{props.orderTime}</span>
				<OrderStatus status={props.orderStatus} />
			</div>
		</Link>
	);
};

export const DesktopOrderCard = (props) => {
	return (
		<div>
			<div>
				<Storefront />
				<h6 className={classes.Heading}>{props.storeName}</h6>
			</div>
			<div>
				<div>
					<p>Order# {props.orderId}</p>
					<p>
						{props.currency} {props.total}
					</p>
				</div>
				<div>
					<p>{props.totalItems}</p>
					<p>
						{props.date}, {props.orderTime}
					</p>
				</div>
			</div>
			<OrderStatus status={props.orderStatus} />
		</div>
	);
};
