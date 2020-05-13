import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from 'next/router';
import {postsAPI} from "../../api/postsAPI";


const Post = ()=> {
    const [post, setPost] = useState({
        title: "t",
        body: "b",
        id: 0
    });
    const router = useRouter();
    let {id} = router.query;
    if(!id){id="46"};

    useEffect(() => {

        // axios.get(`https://simple-blog-api.crew.red/posts/${id}`)
        postsAPI.getCurrentPost(id)
            .then(res=>{
                if( JSON.stringify(post) !== JSON.stringify(res.data)){
                    setPost(res.data);
                }
            })

    });

    return (
        <div>
            <Navbar/>
            It's page of current post
            <ul>

                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </div>
    )
}



export default Post;
