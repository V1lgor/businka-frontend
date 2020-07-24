import React, {useEffect} from "react";
import OrderPage from "./OrderPage";
import {disableCartPreview} from "../../../redux/cartReducer";
import {connect} from "react-redux";

const OrderPageContainer = (props) => {
    useEffect(() => {props.disableCartPreview()}, [props.cartPreviewVisible]);

    return <OrderPage/>
};
const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        disableCartPreview: () => dispatch(disableCartPreview())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPageContainer);