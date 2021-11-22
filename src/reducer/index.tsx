import { combineReducers } from "redux";
import examRedux from "./exam-redux";
const rootReducer = combineReducers({
  examRedux: examRedux,
});

export default rootReducer;
