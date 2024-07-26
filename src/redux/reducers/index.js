import { combineReducers } from "redux";
import combineReducer from "./counterReducer";
import counterReducer from "./counterReducer";
//reduceerları birleştir =combine demek.

const reducers = combineReducers({
  counterReducer,
});

export default reducers;
