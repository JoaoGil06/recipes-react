/* Config */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Firebase / Firestore */
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../firebase";

/* Reducers */
import mainDishesReducer from "./mainDishes/mainDishesReducer";
import accompanimentsReducer from "./accompaniments/accompanimentsReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  mainDishes: mainDishesReducer,
  accompaniments: accompanimentsReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
