import ImageSlider from '../ImageSlider/ImageSlider';
import PageHeader from '../PageHeader/PageHeader';
import * as classes from './ProductDetails.module.css';

const ProductDetails = () => {
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
				<div>
					<h5>Holy Stool</h5>
                    <p></p>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
