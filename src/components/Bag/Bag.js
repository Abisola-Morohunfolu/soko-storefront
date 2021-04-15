import classes from './Bag.module.css';
import { Link } from 'react-router-dom';
import EmptyBagState from './EmptyBagState/EmptyBagState';
import PageHeader from '../PageHeader/PageHeader';

const Bag = () => {
	return (
		<>
			<PageHeader heading="Bag" hideIcon />
			<div className={classes.EmptyState}>
				<EmptyBagState />
				<Link to="/">Start Shopping</Link>
			</div>
		</>
	);
};

export default Bag;
