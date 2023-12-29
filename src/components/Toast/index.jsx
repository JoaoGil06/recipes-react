import { useEffect } from 'react';

import { Container, ToastContainer } from './styles';
import { useDispatch } from 'react-redux';
import * as toastActions from '../../store/toast/toastActions';

const Toast = ({ type, title, message, show }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(toastActions.closeToast());
		}, 3000);

		return () => clearTimeout(timer);
	}, [dispatch, show]);

	const handleCloseToast = () => {
		dispatch(toastActions.closeToast());
	};

	return (
		<Container>
			<ToastContainer type={type} show={show}>
				<div>
					<strong>{title}</strong>
					<p>{message}</p>
				</div>

				<button type='button' onClick={handleCloseToast}>
					X
				</button>
			</ToastContainer>
		</Container>
	);
};

export default Toast;
