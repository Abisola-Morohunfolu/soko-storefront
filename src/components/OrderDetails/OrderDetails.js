import classes from './OrderDetails.module.css';
import { Storefront } from '@material-ui/icons';
import PageHeader from '../PageHeader/PageHeader';
import SmallTextHeading from '../UI/SmallTextHeading/SmallTextHeading';
import OrderDetailsCard from './OrderDetailsCard/OrderDetails';
import OrderStatus from './OrderStatus/OrderStatus';

const OrderDetails = (props) => {
	return (
		<section>
			<PageHeader heading="Order Details" />
			<div className={classes.OrderDetailsContainer}>
				<div className={classes.StoreDetails}>
					<SmallTextHeading text="Store details" />
					<div className={classes.StoreNameBox}>
						<Storefront style={{ fontSize: '36' }} />
						<h5 className={classes.StoreName}>Target</h5>
					</div>
					<div className={classes.OrderInfo}>
						<span>
							<h6>Date Purchased</h6>
							<p>11th November 2019, 11.59pm</p>
						</span>
						<span>
							<h6>Order ID</h6>
							<p>2537932</p>
						</span>
					</div>
					<OrderStatus status="shipped" />
				</div>
				<div className={classes.OrderDetails}>
					<SmallTextHeading text="order details(2)" />
					<OrderDetailsCard
						image="https://res.cloudinary.com/abisola/image/upload/v1618262090/6ac7627e28d1600b384aa56863d16f31_lnnxfg.jpg"
						productName="Holy Stool"
						productSize="Medium"
						quantity="2"
						total="8,700"
						selectedColor="#000"
					/>
					<OrderDetailsCard
						image="https://res.cloudinary.com/abisola/image/upload/v1618262090/c34ade8dd03481e02966103a1abfdf57_ku3rqj.jpg"
						productName="Chief Stool"
						productSize="Large"
						quantity="1"
						total="4,000"
						selectedColor="#fb7"
					/>
				</div>
				<div classes={classes.OrderCost}>
					<span className={classes.OrderCostSpan}>
						<p>Subtotal</p>
						<p>UGX 12,700</p>
					</span>
					<span className={classes.OrderCostSpan}>
						<p>Delivery</p>
						<p>Free</p>
					</span>
					<span className={classes.Total}>
						<p>Total</p>
						<p>UGX 12,700</p>
					</span>
				</div>
			</div>
		</section>
	);
};

export default OrderDetails;
