import {
	DashboardOutlined,
	HomeOutlined,
	LocalMallOutlined,
	ClearAllRounded,
} from '@material-ui/icons';
import NavItem from './NavItem/NavItem';
import * as classes from './BottomNav.module.css';

const BottomNav = () => {
	return (
		<nav className={classes.BottomNav}>
			<NavItem label="Home" path="/">
				<HomeOutlined color="#888" style={{ fontSize: '36' }} />
			</NavItem>
			<NavItem label="Categories" path="/categories">
				<DashboardOutlined color="#888" style={{ fontSize: '36' }} />
			</NavItem>
			<NavItem label="Bag" path="/bag">
				<LocalMallOutlined color="#888" style={{ fontSize: '36' }} />
			</NavItem>
			<NavItem label="Orders" path="/orders">
				<ClearAllRounded color="#888" style={{ fontSize: '36' }} />
			</NavItem>
		</nav>
	);
};

export default BottomNav;
