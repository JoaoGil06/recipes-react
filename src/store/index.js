/* Config */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/* Reducers */
import recipesReducer from "./recipes/recipesReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
