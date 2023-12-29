import { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { AccompanimentsContainer } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import * as accompanimentsActions from '../../store/accompaniments/accompanimentsActions';
import * as categoriesActions from '../../store/categories/categoriesActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from '../../components/Search';
import { GLOBAL_RECIPES_TYPES, RECIPES_TYPES } from '../../constants/globalConstansts';
import Loading from '../../components/Loading';

const styleCardsObj = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	columnGap: '1rem',
	rowGap: '1.5rem',
	justifyItems: 'center',
	overflow: 'none',
};

const Accompaniments = () => {
	const [limit, setLimit] = useState(9);
	const [category, setCategory] = useState(RECIPES_TYPES.TODOS);
	const [searchValue, setSearchValue] = useState('');
	const { recipes, categories, isLoadingRecipes } = useSelector((state) => state.accompaniments);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(categoriesActions.getCategories());
		dispatch(accompanimentsActions.getRecipes(category, searchValue, limit));
	}, [dispatch, limit, category, searchValue]);

	const handleCategoryChange = useCallback((category) => {
		setCategory(category);
	}, []);

	const handleSearch = useCallback((searchValue) => {
		setSearchValue(searchValue);
	}, []);

	const renderCards = (recipes, totalRecipes) => {
		return (
			<InfiniteScroll style={styleCardsObj} dataLength={recipes.length} next={() => setLimit(limit + 3)} hasMore={recipes.length < totalRecipes} loader={<Loading />}>
				{recipes.map((recipe) => {
					return (
						<Card
							key={recipe.id}
							id={recipe.id}
							image={recipe.image}
							title={recipe.title}
							description={recipe.description}
							category={recipe.category}
							recipeType={GLOBAL_RECIPES_TYPES.ACCOMPANIMENTS}
						/>
					);
				})}
			</InfiniteScroll>
		);
	};

	const renderHeader = () => <Header categories={categories} onClick={handleCategoryChange} selectedCategory={category} />;

	return (
		<>
			{renderHeader()}
			<Search handleSearch={handleSearch} />
			{isLoadingRecipes && limit <= 9 ? <Loading /> : <AccompanimentsContainer>{recipes.values && renderCards(recipes.values, recipes.total)}</AccompanimentsContainer>}
		</>
	);
};

export default Accompaniments;
