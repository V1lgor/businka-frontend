import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import Dashboard from "./containers/Dashboard/Dashboard";

function App(props) {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path={"/dashboard"}>
                        <Dashboard/>
                    </Route>
                    <Route path={"/"}>
                        <div className={"app"}>
                            <Header state={{menuItemList: props.state.menuItemList}}/>

                            <Main state={{mainContent: props.state.mainContent, getNewsList: props.state.getNewsList}}/>

                            <Footer state={{menuItemList: props.state.menuItemList}}/>
                        </div>
                    </Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
