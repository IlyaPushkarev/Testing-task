import {postsAPI} from "../api/postsAPI";
import {ADD_NEW_POST} from "../actions/postsAction";

const initialState = {
    newTitle: "",
    newBody: "",
    id: 0
}

const createPostReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_POST:
            return{
                ...state,
                newTitle: action.title,
                newBody: action.body,
                id: new Date()

            }
        default:
            return state
    }
}

export const addNewPostTC = (title="", body="")=>{
    return(dispatch)=>{
        postsAPI.addNewPost(title,body)
           .then(res=>{
               console.log(res)
           })
    }
}
export default  createPostReducer;