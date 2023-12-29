import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Background, ModalContainer, ModalCloseButton, ModalTitle, ModalList, CopyButton } from './styles';

const Modal = ({ data, setShowModal }) => {
	window.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			setShowModal(false);
		}
	});
	const handleCloseModalClick = () => {
		setShowModal(false);
	};

	const renderModalList = () => {
		return data.ingredients.length ? (
			<ModalList>
				{data.ingredients.map((item) => (
					<li>{item}</li>
				))}
			</ModalList>
		) : (
			'A carregar ingredientes...'
		);
	};

	const renderCopyButton = () => (
		<CopyToClipboard text={data.ingredients}>
			<CopyButton>Copiar ingredientes</CopyButton>
		</CopyToClipboard>
	);

	return (
		<>
			<ModalContainer>
				<ModalTitle>Ingredientes</ModalTitle>
				<ModalCloseButton onClick={handleCloseModalClick}>X</ModalCloseButton>
				{renderModalList()}
				{renderCopyButton()}
			</ModalContainer>
			<Background onClick={handleCloseModalClick} />
		</>
	);
};

export default Modal;
