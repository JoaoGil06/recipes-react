import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import MainDishes from './pages/MainDishes';
import Accompaniments from './pages/Accompaniments';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import Cart from './pages/Cart';

import { GlobalStyle } from './styles/GlobalStyle';
import Toast from './components/Toast';

function App() {
	const { toast } = useSelector((state) => state.toast);

	return (
		<BrowserRouter>
			<Navbar />

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/main_dishes' exact>
					<MainDishes />
				</Route>
				<Route path='/recipes/add' exact>
					<AddRecipe />
				</Route>
				<Route path='/recipes/:recipeType/:id' exact>
					<Recipe />
				</Route>
				<Route exact path='/accompaniments'>
					<Accompaniments />
				</Route>
				<Route exact path='/cart'>
					<Cart />
				</Route>
			</Switch>
			{toast.show && <Toast type={toast.type} title={toast.title} message={toast.message} show={toast.show} />}
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;
