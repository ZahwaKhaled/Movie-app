import {createStore,applyMiddleware} from "redux";
import Reducer from "./Store/Reducer";
import CombineReducer from "./Store/CombineReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(CombineReducer,composeWithDevTools((applyMiddleware(thunk)))) 


export default store;