import {createStore} from "redux";
import reducer from "./anecdoteReducer";
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(reducer, composeWithDevTools())


export default store
