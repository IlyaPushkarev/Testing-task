import API from "./api";

export const postsAPI = {
    getPosts: ()=>{
        return API.get()
    },

    addNewPost: (title, body)=>{
        return API.post(`https://simple-blog-api.crew.red/posts`,{
            "title": `${title}`,
            "body": `${body}`
        })
    },

    getCurrentPost: (id)=>{
        return API.get(`/${id}`)
    }
}