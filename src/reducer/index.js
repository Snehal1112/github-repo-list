import { combineReducers } from "redux";
import RepoListReducer from "./RepoListReducer";

export default combineReducers({
  repos: RepoListReducer
});
