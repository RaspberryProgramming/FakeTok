import { combineReducers } from "redux";

import postReducer from "./postReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
  posts: postReducer,
  account: accountReducer,
});