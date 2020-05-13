import {ADD_NEW_POST, LOAD_POSTS, SET_POSTS} from "./postsAction";
import {Post} from "../entities/Post";

export const loadPosts = ()=>{
    return{
        type: LOAD_POSTS
    }
}

export const addPost = (post: Post)=>{
    return{
        type: ADD_NEW_POST,
        post
    }
}

export const setPosts = (posts: Array<Post>)=>{
   return{
       type: SET_POSTS,
       posts
   }
}
export interface ActionTypeBase {
    type: string
}

export interface PostActionType extends ActionTypeBase{
    id?: number,
    post?: Post,
    title?:string,
    body?:string
}

export interface SetPostsActionType extends ActionTypeBase {
    posts: Post[]

}


