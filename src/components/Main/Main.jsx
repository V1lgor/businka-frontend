import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage";
import {Route, Switch} from "react-router-dom";
import NewsItemPageContainer from "./News/NewsItemPageContainer";
import CatalogPage from "./CatalogPage";

const Main = (props) => {

    return (
        <main className="main">
            <CategoryNavbar/>
            <Switch>
                <Route path = "/catalog">
                    <CatalogPage/>
                </Route>
                <Route path="/news/:newsItemId" component = {NewsItemPageContainer}/>

                <Route exact path="/">
                    <IndexPage/>
                </Route>
            </Switch>
        </main>
    )
};

export default Main;