import axios from 'axios';
import {normalize} from "normalizr";
import Region from "./entity/regionEntity";

const GET_REGION_LIST = "GET_REGION_LIST";
const SET_REGION_LIST = "SET_REGION_LIST";

let initialState = {
  regionList: {
      regions: {},
      idList: []
  }
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGION_LIST:
            return state.regionList;
        case SET_REGION_LIST:
            console.log(SET_REGION_LIST);
            return Object.assign({}, state, {
               regionList: action.regionList
            });
        default:
            return state;
    }
};

const setRegionList = ({entities, result}) => {
    return {
        type: SET_REGION_LIST,
        regionList: {
            regions: entities.region,
            idList: result
        }
    }
};

export const getRegionList = () => (dispatch) => {
    console.log("GET REGION LIST");
    axios.get("http://localhost:8080/regions")
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .then(regionList => dispatch(setRegionList(normalize(regionList, [Region]))));
};
