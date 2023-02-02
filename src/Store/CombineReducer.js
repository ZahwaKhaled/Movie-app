import CartReducer from "./CartReducer";
import MoviesReducer from "./MoviesReducer";
import {combineReducers} from "redux"


export default combineReducers  ({
    CartReducer:CartReducer,
    MoviesReducer:MoviesReducer

})