import { legacy_createStore } from "redux";
import rootreducers from "./rootReducer";



export const store = legacy_createStore(rootreducers)