import {SET_POSTS} from "../actions/postsAction";
import {postsAPI} from "../api/postsAPI";
import StoreStructure from "../entities/StoreStructure";
import {Post} from "../entities/Post";
import { SetPostsActionType} from "../actions/actionTypes";

interface IPostsData {
    data: Post[];
}
const initialState: StoreStructure = {
    posts: [],//{title: "Test", body: "Taras her", id: 46}
}


const homeReducer = (state = initialState, action:SetPostsActionType)=>{
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
export const setPostsAC = (posts: Post[])=>{
    return{
        type: SET_POSTS,
        posts
    }
}
export const loadPostsTC = ()=>{
    return(dispatch: Function)=>{

           postsAPI.getPosts()
               .then((response:IPostsData)=>{
                   let posts = response.data.filter(post=>{
                       if(post.title!== "" && post.body!==""){
                           return true;
                       }
                   });
                dispatch(setPostsAC(posts));
            })
    }
}
export default homeReducer;