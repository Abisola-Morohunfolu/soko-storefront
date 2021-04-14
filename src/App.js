import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Bag from './components/Bag/Bag';
import Orders from './components/Orders/Orders';
import BottomNav from './components/BottomNav/BottomNav';
import { useWindowSize } from './utils/hooks/useWindowSize';
import { isMobile } from './utils/isMobile';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import OrderDetails from './components/OrderDetails/OrderDetails';

function App() {
	const { width, height } = useWindowSize();
	const checkMobile = isMobile(width, height);
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/bag" component={Bag} />
				<Route exact path="/orders" component={Orders} />
				<Route path="/orders/:orderId" component={OrderDetails} />
				<Route
					path="/product/:productName"
					component={() => <ProductDetails currency="UGN" price={148000} discount={20} />}
				/>
				<Redirect to="/" />
			</Switch>
			<Footer
				store="Target"
				address="Cham Towers, Plot 12 Nkruma Rd, Kampala Rd."
				isMobileScreen={checkMobile}
			/>
			{checkMobile && <BottomNav />}
		</>
	);
}

export default App;
