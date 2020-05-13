import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PostsBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column; 
    margin: 0 auto;
    background: #f3f3f3;
`;
const PostItem = styled.div`
width: 100%;
border-bottom: 1px solid palevioletred;
cursor: pointer;
margin-top: 1rem;
`;

interface IPostType {
        id: number,
        title: string,
        body: string
}

interface IHomeProps {
    posts: Array<IPostType>
}

const Home = (props:IHomeProps) => {

    return (
        <PostsBox>
            {
                props.posts.map(post=>(
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <PostItem >
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </PostItem>
                    </Link>
                ))
            }
        </PostsBox>

    )
}

export default Home;