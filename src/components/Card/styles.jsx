import styled from 'styled-components';
import { RECIPES_TYPES } from '../../constants/globalConstansts';

export const CardContainer = styled.div`
	width: 30rem;
	height: 45rem;
	perspective: 150rem;
	-moz-perspective: 150rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
	transition: all 0.8s;
`;
export const CardImage = styled.div`
	height: 100%;
	z-index: 3;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	${({ isCardHover }) =>
		isCardHover &&
		` 
        opacity: 0.2;
    `}
`;
export const CardInfo = styled.div`
	color: #fff;
	position: absolute;

	border-radius: 10px;
	display: flex;
	flex-direction: column;

	transition: 1s;
	height: 100%;
	width: 100%;
	z-index: 4;
	opacity: 0;
	padding: 1.5rem;

	${({ isCardHover }) =>
		isCardHover &&
		` 
        opacity: 1;
    `}

	background: ${(props) => {
		switch (props.category) {
			case RECIPES_TYPES.CARNE:
				return 'var(--redGradient)';
			case RECIPES_TYPES.PEIXE:
				return 'var(--blueGradient)';
			case RECIPES_TYPES.VEGETARIANO:
				return 'var(--greenGradient)';
			case RECIPES_TYPES.SALADAS:
				return 'var(--greenGradient)';
			case RECIPES_TYPES.MOLHOS:
				return 'var(--orangeGrandient)';
			case RECIPES_TYPES.CONSERVAS:
				return 'var(--pinkGradient)';
			default:
				return '#fff';
		}
	}};
`;

export const CardInfoHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: #fff;
		text-transform: capitalize;
		z-index: 4;
	}

	img {
		width: 3.5rem;
		z-index: 4;
	}
`;

export const CardInfoContent = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 4;
	opacity: 0;

	h1 {
		color: #fff;
		margin-bottom: 2rem;
		text-align: center;
	}

	p {
		max-width: 25.5rem;
		text-align: left;
		color: #fff;
		font-weight: 200;
		margin-bottom: 2rem;
		font-size: 1.1rem;
		text-align: center;
	}

	${({ isCardHover }) =>
		isCardHover &&
		`
      opacity: 1;
    `}

	transition: 1s;
`;
