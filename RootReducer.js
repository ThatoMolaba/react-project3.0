// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Import your other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers...
});

export default rootReducer;
