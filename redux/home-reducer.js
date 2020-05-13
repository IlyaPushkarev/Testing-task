import {SET_POSTS} from "../actions/postsAction";
import {postsAPI} from "../api/postsAPI";

const initialState = {
    posts: [],//{title: "Test", body: "Taras her", id: 46}
}


const homeReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_POSTS:
            return{
                ...state,
                posts: action.posts
            }

        default:
            return state;
    }
}
export const setPostsAC = (posts)=>{
    return{
        type: SET_POSTS,
        posts
    }
}
export const loadPostsTC = ()=>{
    return(dispatch)=>{

           postsAPI.getPosts()
               .then(response=>{
                // console.log(response);
                dispatch(setPostsAC(response.data));
            })
    }
}
export default homeReducer;