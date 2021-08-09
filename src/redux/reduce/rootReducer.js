import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import statsReducer from "./statsReducer";

export const rootReducer = combineReducers({
    content: contentReducer,
    stats: statsReducer
    
});
