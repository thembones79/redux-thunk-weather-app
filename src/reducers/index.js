import { combineReducers } from "redux";
import woeidReducer from "./woeidReducer";
import weatherReducer from "./weatherReducer";
import formChangeReducer from "./formChangeReducer";

const rootReducer = combineReducers({
  formChangeReducer,
  woeidReducer,
  weatherReducer
});

export default rootReducer;
