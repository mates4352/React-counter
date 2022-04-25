import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReduсer} from "./counter-reducer/counter-reduser";
import thunk from "redux-thunk";

export type state = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   counter: CounterReduсer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
