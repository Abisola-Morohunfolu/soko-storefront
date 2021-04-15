import classes from './Home.module.css';
import ProductCard from '../ProductCard/ProductCard';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import SearchBar from './SearchBar/SearchBar';
import EmptyBagState from '../Bag/EmptyBagState/EmptyBagState';
import CategoriesList from './CategoriesList/CategoriesList';
import SmallTextHeading from '../UI/SmallTextHeading/SmallTextHeading';
import Button from '../UI/Button/Button';
import { ArrowForwardIos } from '@material-ui/icons';
import { ProductList } from '../../utils/static-data';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className={classes.Main}>
			<SearchBar />
			<div className={classes.CategoriesContainer}>
				<SmallTextHeading text="Top categories" />
				<CategoriesSlider />
			</div>
			<div className={classes.MainContent}>
				<div className={classes.Categories}>
					<CategoriesList />
					<Link to="/categories">
						View all categories <ArrowForwardIos />
					</Link>
				</div>
				<div className={classes.Products}>
					<div className={classes.ProductsHeading}>
						<SmallTextHeading text="Top sellers" />
						<Link to="/categories">View all</Link>
					</div>
					{ProductList.map((product) => (
						<ProductCard
							image={product.image}
							productName={product.name}
							price={product.price}
							currency={product.currency}
							discount={product.discount}
							key={product.id}
						/>
					))}
				</div>
				<div className={classes.Bag}>
					<h4>
						Bag <span>0</span>
					</h4>
					<EmptyBagState />
				</div>
			</div>
		</main>
	);
};

export default Home;
