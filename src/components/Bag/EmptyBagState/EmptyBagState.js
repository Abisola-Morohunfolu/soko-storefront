import classes from './EmptyBagState.module.css';

const EmptyBagState = () => {
	return (
		<div className={classes.EmptyBagState}>
			<div className={classes.EmojiContainer}>
				<img
					src="https://res.cloudinary.com/abisola/image/upload/e_grayscale/v1618426666/60f9181e51ef5f4e6ebe3b62e2247a1c_usiok8.jpg"
					alt="Sad emoji face"
				/>
			</div>
			<div>
				<h6>It's empty here</h6>
				<p>Start shopping to add items to your bag</p>
			</div>
		</div>
	);
};

export default EmptyBagState;
