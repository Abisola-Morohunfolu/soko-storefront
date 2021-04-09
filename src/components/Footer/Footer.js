import {
	DashboardOutlined,
	LocalShipping,
	SupervisedUserCircle,
	VerifiedUser,
	WhatsApp,
} from '@material-ui/icons';
import Button, { CollapsableButton } from '../UI/Button/Button';
import * as classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<footer className={classes.Footer}>
			<div className={classes.FeatureBox}>
				<div className={classes.IconBox}>
					<LocalShipping style={{ fontSize: 36, color: '#f8de4b' }} />
					<p>Fast Delivery</p>
				</div>
				<div className={classes.IconBox}>
					<VerifiedUser style={{ fontSize: 36, color: '#f8de4b' }} />
					<p>Buyer Protection</p>
				</div>
				<div className={classes.IconBox}>
					<SupervisedUserCircle style={{ fontSize: 36, color: '#f8de4b' }} />
					<p>Customer Support</p>
				</div>
			</div>
			<div className={classes.FooterText}>
				<h5>Store details</h5>
				<h4>{props.store}</h4>
				<p>{props.address}</p>
			</div>
			<div className={classes.FooterButtonContainer}>
				<Button bgColor="#40c251" labelColor="#fff">
					<WhatsApp />
					<span className={classes.FooterButtonSpan}>Chat with us</span>
				</Button>
				<CollapsableButton bgColor="#3b3b3b" labelColor="#fff">
					<DashboardOutlined color="#fff" />
					<span className={classes.FooterButtonSpan}>Categories</span>
				</CollapsableButton>
			</div>
		</footer>
	);
};

export default Footer;
