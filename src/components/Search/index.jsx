import { useState, useEffect } from 'react';

import { Form, Input } from './styles';

const Search = ({ handleSearch }) => {
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		handleSearch(searchText);
	}, [searchText, handleSearch]);

	let time = null;
	const handleChangeSearchText = (e) => {
		clearTimeout(time);

		time = setTimeout(() => {
			setSearchText(e.target.value);
		}, 500);
	};

	return (
		<Form onSubmit={(e) => e.preventDefault()}>
			<Input type='text' onChange={handleChangeSearchText} placeholder='Pesquisa por uma receita...' />
		</Form>
	);
};

export default Search;
