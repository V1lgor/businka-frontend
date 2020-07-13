import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header state={{menuItemList: props.state.menuItemList}}/>

                <Main state={{mainContent: props.state.mainContent}}/>

                <Footer state={{menuItemList: props.state.menuItemList}}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
