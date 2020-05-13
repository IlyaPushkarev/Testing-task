import homeReducer from "./home-reducer";
import {applyMiddleware, createStore, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import createPostReducer from "./createPost-reducer";

let reducers = combineReducers({
        homePage: homeReducer,
        createPostPage: createPostReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;