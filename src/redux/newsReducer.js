import axios from 'axios';

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const SET_NEWS_LIST = 'SET_NEWS_LIST';

export const GET_CURRENT_NEWS_ITEM = 'GET_CURRENT_NEWS_ITEM';
export const SET_CURRENT_NEWS_ITEM = 'SET_CURRENT_NEWS_ITEM';

export const SET_TOTAL_NEWS_COUNT = 'SET_TOTAL_NEWS_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    newsList: [],
    pageSize: 5,
    totalNewsCount: 0,
    currentPage: 0,
    currentNewsItem: {}
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_LIST:
            return state.newsList;

        case SET_NEWS_LIST:
            return Object.assign({}, state, {
                newsList: action.newsList
            });

        case GET_CURRENT_NEWS_ITEM:
            return state.currentNewsItem;

        case SET_CURRENT_NEWS_ITEM:
            return Object.assign({}, state, {
                currentNewsItem: action.newsItem
            });

        case SET_TOTAL_NEWS_COUNT:
            return Object.assign({}, state, {
                totalNewsCount: action.newsCount
            });

        case SET_CURRENT_PAGE:
            return Object.assign({}, state, {
                currentPage: action.pageNumber
            });

        default:
            return state;
    }
};

export const setNewsList = (newsList) => {
    return {
        type: SET_NEWS_LIST,
        newsList: newsList
    }
};

export const setCurrentNewsItem = (newsItem) => {
    return {
        type: SET_CURRENT_NEWS_ITEM,
        newsItem: newsItem
    }
};

export const setTotalNewsCount = (newsCount) => {
    return {
        type: SET_TOTAL_NEWS_COUNT,
        newsCount: newsCount
    }
};

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
};

export const getTotalNewsCount = () => (dispatch) => {
    axios.head('http://localhost:8080/news')
        .then(response => parseInt(response.headers["x-total-count"]))
        .then(totalNewsCount => dispatch(setTotalNewsCount(totalNewsCount)));
};

export const getNewsList = () => (dispatch, getState) => {
    const pageSize = getState().newsReducer.pageSize;
    const currentPage = getState().newsReducer.currentPage;
    axios.get(`http://localhost:8080/news?page=${currentPage}&size=${pageSize}`)
        .then(response => response.data)
        .then(newsList => dispatch(setNewsList(newsList)));
};

export const getNewsItemById = (newsId) => (dispatch) => {
    axios.get(`http://localhost:8080/news/${newsId}`)
        .then(response => response.data)
        .then(newsItem => dispatch(setCurrentNewsItem(newsItem)))
};