import classes from './Categories.module.css';
import { CategoriesArray } from '../../utils/static-data';
import PageHeader from '../PageHeader/PageHeader';
import ImageOverlayText from '../UI/ImageOverlayText/ImageOverlayText';

const Categories = () => {
	return (
		<>
			<PageHeader heading="Categories" />
			<div className={classes.CategoriesContainer}>
				{CategoriesArray.map((category) => (
					<ImageOverlayText title={category.category} image={category.image} />
				))}
			</div>
		</>
	);
};

export default Categories;
