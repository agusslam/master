import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./Redux/ReducerAuth"
import userReducer from './Redux/ReducerUser'
import rumahReducer from './Redux/ReducerRumah'
import kprReducer from './Redux/ReducerKPR'
import modalReducer from './Redux/ReducerModal'



const CombinedReducer = combineReducers({
  rootReducer,
  userReducer,
  rumahReducer,
  kprReducer,
  modalReducer
})
const middleware = [thunk];

const store = createStore(
  CombinedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
