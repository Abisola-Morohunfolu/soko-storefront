import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router';
import Button from '../UI/Button/Button';
import * as classes from './PageHeader.module.css';

const PageHeader = (props) => {
	const { goBack } = useHistory();
	return (
		<div className={classes.PageHeader}>
			<Button clicked={() => goBack()} bgColor="transparent">
				<ArrowBackIos />
			</Button>
			<h2>{props.heading}</h2>
		</div>
	);
};

export default PageHeader;
