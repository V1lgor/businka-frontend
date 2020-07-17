import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage";
import {Route, Switch} from "react-router-dom";
import NewsItemPageContainer from "./News/NewsItemPageContainer";

const Main = (props) => {

    return (
        <main className="main">
            <CategoryNavbar/>
            <Switch>
                <Route path="/news/:newsItemId" component = {NewsItemPageContainer}/>

                <Route exact path="/">
                    <IndexPage state={{newsList: props.state.mainContent.newsList, getNewsList: props.state.getNewsList}}/>
                </Route>
            </Switch>
        </main>
    )
};

export default Main;