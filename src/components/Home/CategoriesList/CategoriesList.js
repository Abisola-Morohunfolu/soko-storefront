import classes from './CategoriesList.module.css';
import { CategoriesArray } from '../../../utils/static-data';

const CategoryItem = (props) => {
	const isCurrent = props.currentCategory === props.category;
	console.log(isCurrent, props.category);
	return (
		<span className={`${classes.CategoryItem} ${isCurrent ? classes.Active : ''}`}>
			{props.category} ({props.categoryItems})
		</span>
	);
};

const CategoriesList = () => {
	return (
		<div className={classes.CategoriesList}>
			{CategoriesArray.map((category) => (
				<CategoryItem
					category={category.category}
					categoryItems={category.items}
					key={category.category}
					currentCategory="electronics"
				/>
			))}
		</div>
	);
};

export default CategoriesList;
