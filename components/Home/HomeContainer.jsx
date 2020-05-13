import React from "react";
import Home from "./Home";
import {loadPostsTC} from "../../redux/home-reducer";
import {connect} from "react-redux";
import {getIdPost} from "../../lib/post";

class HomeContainer extends React.Component {
    componentDidMount() {
       this.props.getPosts();


    }

    render() {
        return <Home posts={this.props.posts}/>;
    }
}

let mapStateToProps = (state)=>{
    return{
        posts: state.homePage.posts
    }
}

/*let mapDispatchToProps = (dispatch)=>{
    return{
        getPosts: ()=>dispatch(loadPostsTC),
    }
}*/



export  default connect(mapStateToProps,{
    getPosts: loadPostsTC
})(HomeContainer);

