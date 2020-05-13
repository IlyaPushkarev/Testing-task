import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from 'next/router';
import {postsAPI} from "../../api/postsAPI";
import styled from "styled-components";

const PostItem = styled.div`
    background: #f3f3f3;
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
    font-size: 20px;
    `;
const PostItemHeader = styled.div`
font-weight:bold;
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 2px solid palevioletred;
    `;

const Post = ()=> {
    const [post, setPost] = useState({
        title: "",
        body: "",
        id: 0
    });

    const router = useRouter();
    let {id} = router.query;

    useEffect(() => {
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
            <PostItem>
                <PostItemHeader>{post.title}</PostItemHeader>
                <div>{post.body}</div>
            </PostItem>
        </div>
    )
}



export default Post;
