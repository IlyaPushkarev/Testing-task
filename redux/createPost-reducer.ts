import {postsAPI} from "../api/postsAPI";
import StoreStructure from "../entities/StoreStructure"
import {Reducer} from "redux";
import { PostActionType} from "../actions/actionTypes";

const initialState: StoreStructure = {
    newTitle: "",
    newBody: "",
}

const createPostReducer : Reducer<any>= (state = initialState, action:PostActionType)=>{
    switch (action.type) {
        default:
            return state
    }
}

export const addNewPostTC = (title="", body="")=>{
    return()=>{//dispatch: Function
        if(!(title==="" && body==="")){
            postsAPI.addNewPost(title,body)
        }


    }
}
export default  createPostReducer;