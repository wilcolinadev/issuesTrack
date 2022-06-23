import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import reducer from "../userReducer";
import sidebarReducer from "../sidebarReducer";
import issuesFormReducer from "../issuesFormReducer";
import modalFormReducer from "../modalFormReducer";
import issuesReducer from "../issuesReducer";
import searchReducer from "../searchReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  isUserAuth: reducer,
  isSidebarOpen: sidebarReducer,
  issues:issuesFormReducer,
  isModalFormOpen: modalFormReducer,
  activeIssues : issuesReducer,
  inputSearch: searchReducer
});
const composeEnhancer = composeWithDevTools || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(thunk))
);
