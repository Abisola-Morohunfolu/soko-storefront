import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Bag from './components/Bag/Bag';
import Orders from './components/Orders/Orders';
import BottomNav from './components/BottomNav/BottomNav';
import { useWindowSize } from './utils/hooks/useWindowSize';
import { isMobile } from './utils/isMobile';
import ProductDetails from './components/ProductDetails/ProductDetails';

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
				<Route path="/product/:productName" component={ProductDetails} />
			</Switch>
			{checkMobile && <BottomNav />}
		</>
	);
}

export default App;
