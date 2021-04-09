import Button from '../../UI/Button/Button';
import { Search } from '@material-ui/icons';
import * as classes from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div className={classes.InputContainer}>
			<label htmlFor="search" className={classes.Label}>
				Search for products
			</label>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search for products"
				className={classes.Input}
			/>
			<Button bgColor="#f8de4b">
				<Search fontSize="36" color="#2766cc" />
			</Button>
		</div>
	);
};

export default SearchBar;
