/* Config */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Reducers */
import mainDishesReducer from "./mainDishes/mainDishesReducer";
import accompanimentsReducer from "./accompaniments/accompanimentsReducer";
import cartReducer from "./cart/cartReducer";
import recipeReducer from "./recipe/recipeReducer";
import categoriesReducer from "./categories/categoriesReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = combineReducers({
  mainDishes: mainDishesReducer,
  accompaniments: accompanimentsReducer,
  recipe: recipeReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  toast: toastReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
