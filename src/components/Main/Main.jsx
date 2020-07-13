import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage";
import {Route, Switch} from "react-router-dom";
import NewsItemPage from "./News/NewsItemPage";

const Main = () => {

    const newsList = [
        {
            id: "1",
            title: "Какой-то заголовок",
            date: "12-07-2020 19:16",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, praesentium."
        },
        {
            id: "2",
            title: "Мы открылись!",
            date: "12-07-2020 19:16",
            text: "Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла"
        },
    ];

    return (
        <main className="main">
            <CategoryNavbar/>
            <Switch>
                <Route path="/news/:newsItemId" children={({match}) => {
                    const newsItem = newsList.filter(newsItem => newsItem.id === match.params.newsItemId)[0];
                    return <NewsItemPage id={newsItem.id} title={newsItem.title} text={newsItem.text}
                                         date={newsItem.date}/>
                }}/>

                <Route exact path="/">
                    <IndexPage state={{newsList: newsList}}/>
                </Route>
            </Switch>
        </main>
    )
};

export default Main;