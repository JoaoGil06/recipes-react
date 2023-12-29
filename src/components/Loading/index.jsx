import { Container } from './styles';
import LoadingSpinner from '../../assets/icons/loading.svg';

const Loading = () => {
	return (
		<Container>
			<img src={LoadingSpinner} alt='loading' />
		</Container>
	);
};

export default Loading;
