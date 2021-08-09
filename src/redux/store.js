import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reduce/rootReducer";

const initState = {
    content: [],
};
const store = createStore(rootReducer, initState, composeWithDevTools());

export default store;
