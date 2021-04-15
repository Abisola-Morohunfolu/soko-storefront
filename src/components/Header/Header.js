import { LocalMallOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { isMobile } from '../../utils/isMobile';
import classes from './Header.module.css';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import HeaderText from './HeaderText';

const Header = () => {
	const { width, height } = useWindowSize();
	const checkMobile = isMobile(width, height);
	return (
		<header>
			<div className={classes.Tag}>
				Store made with <strong>Soko</strong>
			</div>
			<div className={classes.Header}>
				<HeaderText
					storeName="Target"
					address="Cham Towers, Plot 12 Nkruma Rd, Kampala Rd."
					showIcon
				/>
				{!checkMobile && (
					<div className={classes.IconBox}>
						<HeaderIcon label="bag">
							<LocalMallOutlined style={{ fontSize: '28' }} />
						</HeaderIcon>
						<HeaderIcon label="account">
							<PersonOutlineOutlined style={{ fontSize: '28' }} />
						</HeaderIcon>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
