import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../UI/Button/Button';
import * as classes from './ProductCard.module.css';

const ProductCard = (props) => {
	let discountPrice;
	// if discount change value
	if (props.discount) {
		const discountValue = (props.discount / 100) * props.price;
		discountPrice = props.price - discountValue;
	}

	return (
		<div className={classes.ProductCardContainer}>
			<Link to={`/product/${props.productName}`}>
				<div className={classes.ImageBox}>
					<img src={props.image} alt={props.productName} className={classes.ProductImage} />
					{props.discount && <span className={classes.ProductDiscount}>{props.discount}%</span>}
				</div>
				<div className={classes.TextBox}>
					<h5>{props.productName}</h5>
					<p className={classes.Price}>
						{props.currency} {props.discount ? discountPrice : props.price}
					</p>
					{props.discount && (
						<p className={classes.DiscountPrice}>
							{props.currency} {props.price}
						</p>
					)}
				</div>
			</Link>
			<div className={classes.ButtonContainer}>
				<OutlineButton>
					<Add />
					<span>Add</span>
				</OutlineButton>
			</div>
		</div>
	);
};

export default ProductCard;
