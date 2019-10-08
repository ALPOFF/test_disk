import {combineReducers, createStore} from "redux";
import diskdataReducer from "./diskdata-reducer";

let reducers = combineReducers({
    diskdata: diskdataReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
