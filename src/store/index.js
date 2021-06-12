/* Config */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/* Reducers */
import recipesReducer from "./recipes/recipesReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
