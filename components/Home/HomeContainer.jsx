import React from "react";
import Home from "./Home";
import {loadPostsTC} from "../../redux/home-reducer";
import {connect} from "react-redux";

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

export  default connect(mapStateToProps,{
    getPosts: loadPostsTC
})(HomeContainer);

