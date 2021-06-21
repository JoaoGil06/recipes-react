/* Config */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Firebase / Firestore */
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../firebase";

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
