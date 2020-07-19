import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage";
import {Route, Switch} from "react-router-dom";
import NewsItemPageContainer from "./News/NewsItemPageContainer";
import CatalogPage from "./CatalogPage";
import CategoryProductListContainer from "./CategoryProductListContainer";

const Main = (props) => {

    return (
        <main className="main">
            <CategoryNavbar/>
            <Switch>
                <Route path="/catalog/category/:categoryId" component = {CategoryProductListContainer}/>
                <Route path="/news/:newsItemId" component = {NewsItemPageContainer}/>

                <Route exact path="/">
                    <IndexPage/>
                </Route>

                <Route path = "/catalog">
                    <CatalogPage/>
                </Route>
            </Switch>
        </main>
    )
};

export default Main;