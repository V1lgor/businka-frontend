import {connect} from "react-redux";
import {getNewsList, getTotalNewsCount, setCurrentPage} from "../../../store/newsReducer";
import React, {useEffect} from "react";
import News from "./News";

let NewsContainer = (props) => {
    useEffect(props.getNewsList, [props.currentPage]);

    useEffect(props.getTotalNewsCount, [props.getTotalNewsCount]);

    return (
        <News newsList = {props.newsList} pageCount = {props.pageCount}
              currentPage = {props.currentPage} setCurrentPage = {props.setCurrentPage}/>
    )
};

let mapStateToProps = (state) => {
    return {
        newsList: state.newsReducer.newsList,
        pageCount: Math.ceil(state.newsReducer.totalNewsCount / state.newsReducer.pageSize),
        currentPage: state.newsReducer.currentPage
    }
};

export default connect(mapStateToProps, {getNewsList, getTotalNewsCount, setCurrentPage})(NewsContainer);

