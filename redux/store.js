import { createStore } from "redux";
import { reducer } from "./reducer";


const store = createStore(reducer);

//not using store in braces because we are exporting it like default
export default store;
