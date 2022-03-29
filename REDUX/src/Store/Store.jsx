import { createStore, combineReducers } from "redux";
import counterReducer from "./Reducers/CounterReducer";
import todosReducer from "./Reducers/TodosReducer";

const allReducers = combineReducers({ counterReducer, todosReducer });

const store = createStore(allReducers);
export { store };
