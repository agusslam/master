import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./Redux/ReducerAuth"
import userReducer from './Redux/ReducerUser'
import rumahReducer from './Redux/ReducerRumah'

const CombinedReducer = combineReducers({
  rootReducer,
  userReducer,
  rumahReducer,
})
const middleware = [thunk];

const store = createStore(
  CombinedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
