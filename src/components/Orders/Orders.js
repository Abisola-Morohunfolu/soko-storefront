// import { Route } from 'react-router';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { isMobile } from '../../utils/isMobile';
import { MobileOrderCard, DesktopOrderCard } from './OrderCard/OrderCard';

const Orders = () => {
	const { width, height } = useWindowSize();
	const checkScreenSizeIsMobile = isMobile(width, height);
	const date = new Date().toLocaleDateString();
	const orderID = '2537932';

	return (
		<>
			{checkScreenSizeIsMobile ? (
				<MobileOrderCard
					orderId={orderID}
					customerName="John Agu"
					currency="UGN"
					totalItems={3}
					total={12700}
					orderTime={'11.03pm'}
					orderStatus="pending"
				/>
			) : (
				<DesktopOrderCard
					orderId={orderID}
					customerName="John Agu"
					currency="UGN"
					totalItems={3}
					total={12700}
					orderTime={'11.03pm'}
					orderStatus="pending"
					storeName="Target"
					orderDate={date}
					// storeIcon={Storefront}
				/>
			)}
			{/* <Route path={}/> */}
		</>
	);
};

export default Orders;
