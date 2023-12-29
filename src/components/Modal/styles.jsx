import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContainer = styled.div`
	min-width: 80rem;
	min-height: 50rem;
	background: #fff;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #000;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 2rem;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
	margin-top: 5rem;
`;

export const ModalList = styled.ul`
	list-style-type: none;
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 1.6rem;
	grid-row-gap: 1.6rem;

	& > li {
		font-size: 1.2rem;
		display: flex;
		align-items: center;
	}
`;

export const CopyButton = styled.button`
	background: transparent;
	color: #000;
	padding: 0.5rem 1rem;
	font-weight: 600;
	font-family: 'Open Sans';
	font-size: 1.1rem;
	transition: 0.5s;
	border: 1px solid #000;
	border-radius: 5px;
	margin-top: 2.5rem;

	&:hover {
		cursor: pointer;
		background: #000;

		color: #fff;
	}

	&:focus {
		outline: none !important;
	}
`;

export const ModalCloseButton = styled.div`
	position: absolute;
	top: 1rem;
	right: 2rem;
	cursor: pointer;
	font-family: 'Open Sans';
	font-weight: bold;
`;
