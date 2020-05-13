import React from "react";

class  Post extends React.Component{
    state = {
        postTitle: "",
        postBody: ""
    }
    // let newPostTitle = React.createRef();
    // let title = newPostTitle.current.value;
    // let newPostBody = React.createRef();
    // let body = newPostBody.current.value;

    onChangePostTitle= (e)=>{
        let title = e.currentTarget.value;
        // props.onUpdatePost(title)
        this.setState({
            postTitle: title
        })
    }

    onChangePostBody= (e)=>{
        let body = e.currentTarget.value;
        // props.onUpdatePost(this.props.title,body)
        this.setState({
            postBody: body
        })
    }

    onAddPost = ()=>{
        console.log(this.state.postTitle);
        console.log(this.state.postBody);

        this.props.addNewPost(this.state.postTitle,this.state.postBody);
    }

    render() {
        return(
            <div>
                <h1>Create new post</h1>
                <input
                    type="text"
                    placeholder="Insert a title"
                    // ref={newPostTitle}
                    onChange={this.onChangePostTitle}
                />
                <textarea
                    placeholder="Create a post"
                    // ref={newPostBody}
                    onChange={this.onChangePostBody}
                ></textarea>
                <button onClick={this.onAddPost}>ADD POST</button>
            </div>
        )
    }
}

export default Post;