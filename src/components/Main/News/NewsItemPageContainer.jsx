import NewsItemPage from "./NewsItemPage";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getNewsItemById} from "../../../redux/newsReducer";

const NewsItemPageContainer = (props) => {

    useEffect(() => props.getNewsItemById(props.match.params.newsItemId), [props.match.params.newsItemId]);

    return <NewsItemPage title={props.newsItem.title} text={props.newsItem.text}
                         date={props.newsItem.date}/>
};

const mapStateToProps = (state) => {
    return {
        newsItem: state.newsReducer.currentNewsItem
    }
};

export default connect(mapStateToProps, {getNewsItemById})(NewsItemPageContainer);
