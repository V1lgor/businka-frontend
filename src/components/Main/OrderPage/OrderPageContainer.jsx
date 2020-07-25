import React, {useEffect} from "react";
import OrderPage from "./OrderPage";
import {disableCartPreview} from "../../../redux/cartReducer";
import {connect} from "react-redux";
import {getRegionList} from "../../../redux/orderReducer";

const OrderPageContainer = (props) => {
    console.log(props);
    useEffect(() => {
        props.disableCartPreview()
    }, [props.cartPreviewVisible]);
    useEffect(() => {
        props.getRegionList()
    }, [props.getRegionList]);

    return <OrderPage regionList={props.regionList.idList.map(id => props.regionList.regions[id])}/>
};
const mapStateToProps = (state) => {
    return {
        regionList: state.orderReducer.regionList
    };
};


export default connect(mapStateToProps, {
    disableCartPreview,
    getRegionList
})(OrderPageContainer);
