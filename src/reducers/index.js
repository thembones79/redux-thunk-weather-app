import { combineReducers } from "redux";
import woeidReducer from "./woeidReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  woeidReducer,
  weatherReducer
});

export default rootReducer;
