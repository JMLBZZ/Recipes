import {combineReducers} from "redux"
import appReducer from "./reducers/appReducer"
import {configureStore} from "@reduxjs/toolkit"

const routeReducer = combineReducers({
    users: appReducer
})

const store = configureStore({
    reducer: routeReducer
})

export default store