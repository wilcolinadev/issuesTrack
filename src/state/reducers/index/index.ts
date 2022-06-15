import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import reducer from "../userReducer";
import sidebarReducer from "../sidebarReducer";
import issuesReducer from "../issuesReducer";
import modalFormReducer from "../modalFormReducer"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  isUserAuth: reducer,
  isSidebarOpen: sidebarReducer,
  issues:issuesReducer,
  isModalFormOpen: modalFormReducer
});
const composeEnhancer = composeWithDevTools || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(thunk))
);
