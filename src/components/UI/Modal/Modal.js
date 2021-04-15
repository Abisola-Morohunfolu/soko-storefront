import * as classes from './Modal.module.css';

const Modal = ({ showModal, hideModal, children }) => {
	if (!showModal) return null;
	return (
		<section onClick={hideModal} className={classes.Modal}>
			{children}
		</section>
	);
};

export default Modal;
