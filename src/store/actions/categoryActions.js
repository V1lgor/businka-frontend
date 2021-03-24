import axios from "axios";

import * as actionTypes from './actionTypes';

import * as actions from './index';

export const setCategoryList = (categoryList) => {
    return {
        type: actionTypes.SET_CATEGORY_LIST,
        categoryList
    }
}

export const loadCategoryList = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/category/flat")
            .then(response => response.data)
            .then(categoryList => dispatch(setCategoryList(categoryList)))
    }
}

export const deleteCategorySync = (categoryId) => {
    return {
        type: actionTypes.DELETE_CATEGORY,
        categoryId
    }
}

export const deleteCategory = (categoryId) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8080/category/${categoryId}`)
            .then(() => dispatch(deleteCategorySync(categoryId)))
            .then(() => dispatch(actions.pushNotificationWithTimeout("Категория удалена успешно", "success")))
            .catch(error => {
                const errorMessage = error.response.data;
                dispatch(actions.pushNotificationWithTimeout(errorMessage, "error"))
            })
    };
};