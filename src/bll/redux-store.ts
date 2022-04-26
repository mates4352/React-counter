import {combineReducers, createStore} from "redux";
import {CounterReduсer} from "./counter-reducer/counter-reduser";
import {loadState, saveState} from "./localStorage";

export type state = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
   counter: CounterReduсer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
   saveState(store.getState())
})

