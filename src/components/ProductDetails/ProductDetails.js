import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { isMobile } from '../../utils/isMobile';
import ImageSlider from '../ImageSlider/ImageSlider';
import PageHeader from '../PageHeader/PageHeader';
import Button, { OutlineButton } from '../UI/Button/Button';
import SelectButton, { SelectColorButton } from '../UI/Button/SelectButton';
import SmallTextHeading from '../UI/SmallTextHeading/SmallTextHeading';
import * as classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
	let discountPrice;
	// if discount change value
	if (props.discount) {
		const discountValue = (props.discount / 100) * props.price;
		discountPrice = props.price - discountValue;
	}

	// check screen size
	const { width, height } = useWindowSize();
	const checkMobile = isMobile(width, height);
	return (
		<>
			<PageHeader heading="Furniture" />
			<section className={classes.ProductDetails}>
				<ImageSlider>
					<img
						src="https://res.cloudinary.com/abisola/image/upload/v1618262090/6ac7627e28d1600b384aa56863d16f31_lnnxfg.jpg"
						alt="Stool"
						className={classes.ProductImage}
					/>
					<img
						src="https://res.cloudinary.com/abisola/image/upload/v1618262090/c34ade8dd03481e02966103a1abfdf57_ku3rqj.jpg"
						alt="Stool"
						className={classes.ProductImage}
					/>
				</ImageSlider>
				<div className={classes.ProductText}>
					<h5>Holy Stool</h5>
					<p>
						Sold as a peice, Wooden upholstered ottoman lends a laid-back appeal to your indoor
						space. Comes with soft padding for extra comfort and support. Solid wooden and metal
						frame ensures durable, long-lasting use. Great as a footrest or extra seat when
						entertaining guests
					</p>
					<div className={classes.PriceBox}>
						<span>
							<p className={classes.ProductPrice}>
								{props.currency} {props.discount ? discountPrice : props.price}
							</p>
							{props.discount && (
								<p className={classes.ProductDiscountPrice}>
									{props.currency} {props.price}
								</p>
							)}
						</span>
						{props.discount && <span className={classes.DiscountBox}>-{props.discount}%</span>}
					</div>
					{checkMobile && (
						<div>
							<div>
								<SmallTextHeading text="Select Size" />
								<div className={classes.SelectButtonContainer}>
									<SelectButton value="Fully Assembled" currentValue="Fully Assembled" />
									<SelectButton value="Stall Only" currentValue="Fully Assembled" />
									<SelectButton value="23" currentValue="Fully Assembled" />
								</div>
							</div>
							<div>
								<SmallTextHeading text="Select Color" />
								<div className={classes.SelectColorButtonContainer}>
									<SelectColorButton color="#000" currentColor="#000" />
									<SelectColorButton color="#db9d4b" currentColor="#000" />
								</div>
							</div>
						</div>
					)}

					{/* {!checkMobile && (

					)} */}
					<div className={classes.ButtonContainer}>
						<OutlineButton>
							<span>Add to Bag</span>
						</OutlineButton>
						<Button>
							<span>Buy Now</span>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
