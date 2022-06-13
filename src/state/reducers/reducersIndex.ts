import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import reducer from "./userReducer";
import sidebarReducer from "./sidebarReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  isUserAuth: reducer,
  isSidebarOpen: sidebarReducer
});
const composeEnhancer = composeWithDevTools || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(thunk))
);
