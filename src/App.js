import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";

function App(props) {
    return (
        <BrowserRouter>
            <Provider store = {store}>
            <div className={"app"}>
                <Header state={{menuItemList: props.state.menuItemList}}/>

                <Main state={{mainContent: props.state.mainContent, getNewsList: props.state.getNewsList}}/>

                <Footer state={{menuItemList: props.state.menuItemList}}/>
            </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
