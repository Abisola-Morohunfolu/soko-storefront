import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {
	return (
		<main style={{ width: '100%' }}>
			<SearchBar />
			<CategoriesSlider />
			<ProductCard
				image="https://res.cloudinary.com/abisola/image/upload/v1617969885/facemask_evalsn.jpg"
				productName="Kids' 2pk Face Mask"
				price={185000}
				currency="UGX"
				discount={20}
			/>
			<Footer store="Target" address="Cham Towers, Plot 12 Nkruma Rd, Kampala Rd." />
		</main>
	);
};

export default Home;
