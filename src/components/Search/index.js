import React, { useState, useEffect } from "react";

import { Form } from "./styles";

import { useDispatch } from "react-redux";

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSearch(searchText));
  }, [dispatch, searchText, handleSearch]);

  let time = null;
  const handleChangeSearchText = (e) => {
    clearTimeout(time);

    time = setTimeout(() => {
      setSearchText(e.target.value);
    }, 500);
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input type="text" onChange={handleChangeSearchText} />
    </Form>
  );
};

export default Search;
