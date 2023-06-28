import {combineReducers} from "redux"
import { reducer } from "./reducer"


const rootreducers = combineReducers({
    reducer :reducer
})

export default rootreducers