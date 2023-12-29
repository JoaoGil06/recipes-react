import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import * as mainDishesActions from '../../store/mainDishes/mainDishesActions';
import * as accompanimentsActions from '../../store/accompaniments/accompanimentsActions';

import CutleryIcon from '../../assets/icons/cutlery.svg';
import ShoppingCart from '../../assets/icons/shoppingcart.svg';
import RecipeBook from '../../assets/icons/recipebook.svg';
import Salad from '../../assets/icons/salad.svg';
import HorizontalCard from '../../components/HorizontalCard';

import { HomeContainer } from './styles';

const Home = () => {
	const { totalRecipes: mainDishesRecipes } = useSelector((state) => state.mainDishes);
	const { totalRecipes: accompanimentsRecipes } = useSelector((state) => state.accompaniments);
	const { cart } = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(mainDishesActions.getTotalRecipesCount());
		dispatch(accompanimentsActions.getTotalRecipesCount());
	}, [dispatch]);

	return (
		<HomeContainer>
			<Link to='/main_dishes'>
				<HorizontalCard
					gradient={{
						backgroundImage: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
					}}
					title='Pratos Principais'
					icon={CutleryIcon}
					quantity={mainDishesRecipes}
					description='disponíveis'
				/>
			</Link>

			<Link to='/accompaniments'>
				<HorizontalCard
					gradient={{
						backgroundImage: 'linear-gradient(to right, #11998e, #38ef7d)',
					}}
					title='Acompanhamentos'
					icon={Salad}
					quantity={accompanimentsRecipes}
					description='disponíveis'
				/>
			</Link>

			<Link to='/recipes/add'>
				<HorizontalCard
					gradient={{
						backgroundImage: 'linear-gradient(to right, #ff4e50, #f9d423)',
					}}
					title='Adicionar Receita'
					icon={RecipeBook}
					quantity={'+'}
					description='nova receita'
				/>
			</Link>

			<Link to='/cart'>
				<HorizontalCard
					gradient={{
						backgroundImage: 'linear-gradient(to right, #473b7b 0%, #3584a7 48.53%, #30d2be 100%)',
					}}
					title='Carrinho'
					icon={ShoppingCart}
					quantity={cart.length}
					description='adicionadas'
				/>
			</Link>
		</HomeContainer>
	);
};

export default Home;
