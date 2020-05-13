import * as axios from "axios";

// export let arrId = [];

export async function getIdPosts() {
    let res = await axios.get(`https://simple-blog-api.crew.red/posts`);
    let arrId = res.data.map(post => {
            return{
                params: {
                    id: "" + post.id
                }
            }
        }
    )
    // console.log(arrId);
    return arrId;
}

export  function getPostData(id) {
    let res = axios.get(`https://simple-blog-api.crew.red/posts/${id}`)
    return res.data;
  /*  let r = {
        id,
        ...data
    }
    console.log(res.data);
    return {
        id,
        ...res.data
    }*/
}