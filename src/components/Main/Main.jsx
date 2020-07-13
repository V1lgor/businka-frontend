import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage";
import {Route, Switch} from "react-router-dom";
import NewsItemPage from "./News/NewsItemPage";

const Main = (props) => {

    return (
        <main className="main">
            <CategoryNavbar/>
            <Switch>
                <Route path="/news/:newsItemId" children={({match}) => {
                    const newsItem = props.state.mainContent.newsList.filter(newsItem => {
                        return newsItem.id === match.params.newsItemId
                    })[0];
                    return <NewsItemPage id={newsItem.id} title={newsItem.title} text={newsItem.text}
                                         date={newsItem.date}/>
                }}/>

                <Route exact path="/">
                    <IndexPage state={{newsList: props.state.mainContent.newsList}}/>
                </Route>
            </Switch>
        </main>
    )
};

export default Main;