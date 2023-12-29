import { HorizontalCardContainer, Header, Body, Quantity } from './styles';

const HorizontalCard = ({ gradient, title, icon, quantity, description }) => {
	return (
		<HorizontalCardContainer style={gradient}>
			<Header>
				<h2>{title}</h2>
				<img src={icon} alt='recipes' />
			</Header>
			<Body>
				<div className='line'></div>
				<Quantity>
					<h1>{quantity}</h1>
					<h2>{description}</h2>
				</Quantity>
			</Body>
		</HorizontalCardContainer>
	);
};

export default HorizontalCard;
