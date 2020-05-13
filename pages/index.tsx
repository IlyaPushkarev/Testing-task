import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import HomeContainer from "../components/Home/HomeContainer";
import {Provider} from "react-redux";
import store from "../redux/store";

export default () => (<div>
        <Provider store={store}>
        <Navbar></Navbar>
        <HomeContainer />
        </Provider>
</div>
)
