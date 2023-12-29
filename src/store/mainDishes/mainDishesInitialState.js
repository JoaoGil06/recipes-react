const initialState = {
  recipes: {},
  totalRecipes: 0,
  categories: [],
  isLoadingRecipes: false,
  isLoadingCategories: false,
  filters: {
    category: "todos",
    search: "",
  },
  recipe: {},
};

export default initialState;
