import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as recipeActions from '../../store/recipe/recipeActions';
import * as Yup from 'yup';
import CloudUpload from '../../assets/icons/cloudupload.svg';
import { useHistory } from 'react-router-dom';

import { AddRecipeContainer, Title, Form, FormGrid, FormControl, InputLabel, InputText, InputSelect, SelectOption, InputFile, InputLabelFile, InputTextArea, HR, Button } from './styles';
import { GLOBAL_RECIPES_TYPES, RECIPES_TYPES } from '../../constants/globalConstansts';
import * as categoriesActions from '../../store/categories/categoriesActions';
import Loading from '../../components/Loading';

const AddRecipe = () => {
	const [numOfIngredients, setNumOfIngredients] = useState([]);
	const [preparationSteps, setPreparationSteps] = useState([]);
	const [recipeData, setRecipeData] = useState({
		title: '',
		recipeType: 'main_dishes',
		category: 'carne',
		description: '',
		image: {},
		ingredients: {},
		preparationSteps: {},
	});
	const [formErrors, setFormErrors] = useState({});

	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.categories);
	const { isLoading } = useSelector((state) => state.recipe);
	const { toast } = useSelector((state) => state.toast);

	const history = useHistory();

	useEffect(() => {
		dispatch(categoriesActions.getCategories());
	}, [dispatch]);

	useEffect(() => {
		console.log('isLoading', isLoading);
		if (!isLoading && !!toast.type) {
			recipeData.recipeType === GLOBAL_RECIPES_TYPES.MAIN_DISHES ? history.push('/main_dishes') : history.push('/accompaniments');
		}
	}, [isLoading, history, recipeData.recipeType, toast.type]);

	const handleChangeNumberOfIngredients = (e) => {
		const quantity = parseInt(e.target.value);

		quantity > 15 ? setNumOfIngredients(Array.apply(null, Array(15)).map((val, idx) => idx)) : setNumOfIngredients(Array.apply(null, Array(quantity)).map((val, idx) => idx));
	};

	const handleChangeNumberOfSteps = (e) => {
		const quantity = parseInt(e.target.value);

		quantity > 15 ? setPreparationSteps(Array.apply(null, Array(15)).map((val, idx) => idx)) : setPreparationSteps(Array.apply(null, Array(quantity)).map((val, idx) => idx));
	};

	const handleOnChange = (e) => {
		const { name, value, files } = e.target;

		if (name.includes('ingredient')) {
			setRecipeData({
				...recipeData,
				ingredients: { ...recipeData.ingredients, [name]: value },
			});
		} else if (name.includes('preparationStep')) {
			setRecipeData({
				...recipeData,
				preparationSteps: { ...recipeData.preparationSteps, [name]: value },
			});
		} else if (files !== null && !!files) {
			setRecipeData({
				...recipeData,
				image: files['0'],
			});
		} else if (name.includes('recipeType')) {
			value === 'main_dishes'
				? setRecipeData({
						...recipeData,
						[name]: value,
						category: 'carne',
				  })
				: setRecipeData({
						...recipeData,
						[name]: value,
						category: 'saladas',
				  });
		} else {
			setRecipeData({
				...recipeData,
				[name]: value,
			});
		}
	};

	const handleAddRecipe = async (e) => {
		e.preventDefault();

		const params = {
			...recipeData,
			ingredients: Object.values(recipeData.ingredients),
			preparationSteps: Object.values(recipeData.preparationSteps),
		};

		try {
			const schema = Yup.object().shape({
				title: Yup.string().required({
					field: 'title',
					errorMessage: 'Titulo obrigatório',
				}),
				recipeType: Yup.mixed().oneOf([GLOBAL_RECIPES_TYPES.MAIN_DISHES, GLOBAL_RECIPES_TYPES.ACCOMPANIMENTS], {
					field: 'recipeType',
					errorMessage: 'Tipo de Receita obrigatória',
				}),
				category: Yup.mixed().oneOf([RECIPES_TYPES.CARNE, RECIPES_TYPES.PEIXE, RECIPES_TYPES.VEGETARIANO, RECIPES_TYPES.CONSERVAS, RECIPES_TYPES.MOLHOS, RECIPES_TYPES.SALADAS], {
					field: 'category',
					errorMessage: 'Categoria obrigatória',
				}),
				description: Yup.string().required({
					field: 'description',
					errorMessage: 'Descrição obrigatória',
				}),
				ingredients: Yup.array().min(1, {
					field: 'ingredients',
					errorMessage: 'A receita deve ter pelo menos 1 ingrediente',
				}),
				preparationSteps: Yup.array().min(1, {
					field: 'preparationSteps',
					errorMessage: 'A receita deve ter pelo menos 1 passo',
				}),
			});

			await schema.validate(params, {
				abortEarly: false,
			});

			dispatch(recipeActions.addRecipe(params));
		} catch (err) {
			let errors = {};
			err.errors.map((error) => {
				return (errors[error.field] = error.errorMessage);
			});

			setFormErrors(errors);
		}
	};

	const renderTitle = () => (
		<Title>
			<h1>Adicionar nova receita</h1>
			<span className='underline'></span>
		</Title>
	);

	const renderForm = () => (
		<Form onSubmit={handleAddRecipe}>
			<FormControl>
				<InputLabel htmlFor='title'>
					<h3>Titulo</h3>
					{!!formErrors.title && <span>{formErrors.title}</span>}
				</InputLabel>
				<InputText type='text' placeholder='Insere um titulo para a receita' name='title' onChange={handleOnChange} category={recipeData.category} />
			</FormControl>
			<FormControl>
				<InputLabel htmlFor='recipeType'>
					<h3>Tipo de Receita</h3>
					{!!formErrors.recipeType && <span>{formErrors.recipeType}</span>}
				</InputLabel>
				<InputSelect id='recipeType' name='recipeType' onChange={handleOnChange} category={recipeData.category} defaultValue={recipeData.recipeType}>
					<option value={'main_dishes'}>Pratos Principais</option>
					<option value='accompaniments'>Acompanhamentos</option>
				</InputSelect>
			</FormControl>
			<FormControl>
				<InputLabel htmlFor='category'>
					<h3>Categoria</h3>
					{!!formErrors.category && <span>{formErrors.category}</span>}
				</InputLabel>
				<InputSelect id='category' type='text' placeholder='Categoria' name='category' onChange={handleOnChange} category={recipeData.category} defaultValue={recipeData.category}>
					{categories.length
						? recipeData.recipeType === GLOBAL_RECIPES_TYPES.MAIN_DISHES
							? categories[0].main_dishes.map((category) => category !== RECIPES_TYPES.TODOS && <SelectOption value={category}>{category.replace(/^\w/, (c) => c.toUpperCase())}</SelectOption>)
							: categories[0].accompaniments.map((category) => category !== RECIPES_TYPES.TODOS && <SelectOption value={category}>{category.replace(/^\w/, (c) => c.toUpperCase())}</SelectOption>)
						: null}
				</InputSelect>
			</FormControl>
			<FormControl>
				<InputLabel htmlFor='description'>
					<h3>Descrição</h3>
					{!!formErrors.description && <span>{formErrors.description}</span>}
				</InputLabel>
				<InputText type='text' placeholder='Insere uma descrição para a receita' name='description' onChange={handleOnChange} category={recipeData.category} />
			</FormControl>
			<FormControl>
				<InputLabel>
					<h3>Imagem</h3>
				</InputLabel>
				<InputLabelFile htmlFor='file' category={recipeData.category}>
					<img src={CloudUpload} alt='Upload recipe' />
					<span>{recipeData['image']?.name ? recipeData['image'].name : 'Seleciona uma imagem'}</span>
				</InputLabelFile>
				<InputFile id='file' type='file' onChange={handleOnChange} />
			</FormControl>
			<HR />
			<FormControl type='number'>
				<InputLabel htmlFor='numOfIngredients' type='number'>
					<h3>Nº de Ingredientes</h3>
				</InputLabel>
				<InputText type='number' onChange={handleChangeNumberOfIngredients} max={15} min={0} placeholder='Nº de Ingredientes' name='numOfIngredients' category={recipeData.category} />

				{!!formErrors.ingredients && <p>{formErrors.ingredients}</p>}
			</FormControl>
			<FormGrid type='ingredients'>
				{numOfIngredients.map((value, index) => (
					<FormControl key={index}>
						<InputLabel htmlFor={`ingredient-${index + 1}`}>
							<h3>Ingrediente nº 0{index + 1}</h3>
						</InputLabel>
						<InputText type='text' placeholder={`Ingrediente 0${index + 1}`} name={`ingredient-${index + 1}`} onChange={handleOnChange} category={recipeData.category} />
					</FormControl>
				))}
			</FormGrid>
			<HR />
			<FormControl type='number'>
				<InputLabel htmlFor='numOfSteps' type='number'>
					<h3>Nº de Passos</h3>
				</InputLabel>
				<InputText type='number' onChange={handleChangeNumberOfSteps} max={15} min={0} placeholder='Nº de Passos' name='preparationSteps' category={recipeData.category} />
				{!!formErrors.preparationSteps && <p>{formErrors.preparationSteps}</p>}
			</FormControl>
			<FormGrid type='steps'>
				{preparationSteps.map((value, index) => (
					<FormControl key={index}>
						<InputLabel htmlFor={`preparationStep-${index + 1}`}>
							<h3>Passo nº 0{index + 1}</h3>
						</InputLabel>
						<InputTextArea type='text' placeholder={`Passo 0${index + 1}`} name={`preparationStep-${index + 1}`} onChange={handleOnChange} rows='4' category={recipeData.category}></InputTextArea>
					</FormControl>
				))}
			</FormGrid>

			<Button onClick={handleAddRecipe} category={recipeData.category}>
				Adicionar receita
			</Button>
		</Form>
	);

	return (
		<AddRecipeContainer>
			{renderTitle()}
			{isLoading ? <Loading /> : renderForm()}
		</AddRecipeContainer>
	);
};

export default AddRecipe;
