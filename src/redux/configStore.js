import {combineReducers, createStore} from "redux"
import {ListReducer} from "./reducers/ListReducer"
import {danCuReducer} from "./reducers/DanCuReducer"
import {dichVuReducer} from "./reducers/DichVuReducer"
import {taiSanReducer} from "./reducers/TaiSanReducer"

const rootReducer = combineReducers ({
    ListReducer,
    // danCuReducer,
    // dichVuReducer,
    // taiSanReducer
})

export const store = createStore(rootReducer);