import {applyMiddleware, combineReducers, createStore} from "redux"
import {ListReducer} from "./reducers/ListReducer"
import {NguoiDungReducer} from "./reducers/NguoiDungReducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers ({
    ListReducer,
    NguoiDungReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));