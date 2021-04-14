import classes from './OrderDetailsCard.module.css';
import { SelectColorButton } from '../../UI/Button/SelectButton';

const OrderDetailsCard = (props) => {
	return (
		<div className={classes.OrderDetailsCard}>
			<div className={classes.ImageContainer}>
				<img src={props.image} alt={props.productName} />
			</div>
			<div className={classes.TextBox}>
				<h5>{props.productName}</h5>
				<div className={classes.OrderInfo}>
					<span>
						<p>Size:</p> {props.productSize}
					</span>
					<span>
						<p>Color:</p> <SelectColorButton color={props.selectedColor} />
					</span>
				</div>
				<div className={classes.PriceBox}>
					<span>X{props.quantity}</span>
					<span>UGX {props.total}</span>
				</div>
			</div>
		</div>
	);
};

export default OrderDetailsCard;
