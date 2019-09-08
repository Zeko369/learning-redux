import { counterReducer } from "./counter";
import { isLoggedReducer } from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  count: counterReducer,
  isLoggedIn: isLoggedReducer
});

export default allReducers;
