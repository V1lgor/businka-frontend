import * as actionTypes from '../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import {Category} from "../entity/productEntity";

const initialState = {
    categoryList: {
        categories: [],
        ids: []
    }
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_LIST:
            return produce(state, (draftState) => {
                const normalizedCategoryList = normalize(action.categoryList, [Category])
                draftState.categoryList = {
                    categories: normalizedCategoryList.entities.category,
                    ids: normalizedCategoryList.result
                }
            })
        default:
            return state;
    }
}

export default categoryReducer;