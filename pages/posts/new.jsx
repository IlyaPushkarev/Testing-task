import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import PostContainer from "../../components/Post/PostContainer";
import store from "../../redux/store";
import {Provider} from "react-redux";



export default () => (<div>
    <Provider store={store}>
    <Navbar></Navbar>
    <PostContainer />
    </Provider>

</div>
)