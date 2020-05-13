import React from "react";
import Link from "next/link";

const Home = (props) => {

    return (
        <div>Home page in
            {

                props.posts.map(post=>(
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <div >
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                ))
            }
        </div>

    )
}

export default Home;