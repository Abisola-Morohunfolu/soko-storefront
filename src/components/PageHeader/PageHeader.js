import { ArrowBackIos, LocalMallOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { isMobile } from '../../utils/isMobile';
import Button from '../UI/Button/Button';
import * as classes from './PageHeader.module.css';

const PageHeader = (props) => {
	const { goBack } = useHistory();
	const { width, height } = useWindowSize();
	const checkMobile = isMobile(width, height);
	return (
		<div className={classes.PageHeader}>
			<Button clicked={() => goBack()} bgColor="transparent">
				<ArrowBackIos />
			</Button>
			<h2>{props.heading}</h2>
			{checkMobile && (
				<Link to="/bag" className={classes.PageHeaderLink}>
					<LocalMallOutlined style={{ fontSize: '24' }} />
				</Link>
			)}
		</div>
	);
};

export default PageHeader;
