import React from "react";
import Post from "./Post";
import {addNewPostTC} from "../../redux/createPost-reducer";
import {connect} from "react-redux";

class PostContainer extends React.Component{
    render(){
        return <Post
            title={this.props.title}
            body={this.props.body}
            addNewPost={this.props.addNewPost}
        />
    }
}

let mapStateToProps = (state)=>{
    return{
        title: state.createPostPage.newTitle,
        body: state.createPostPage.newBody,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addNewPost: (newTitle, newBody)=>{
            dispatch(addNewPostTC(newTitle, newBody));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostContainer);