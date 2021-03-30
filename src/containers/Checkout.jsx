import React, {useEffect} from "react";
import OrderPage from "../components/Main/OrderPage/OrderPage";
import {disableCartPreview} from "../store/cartReducer";
import {connect} from "react-redux";
import {
    getCityListByRegionId,
    getRegionList,
    setFormField,
    setSelectedCity,
    submitOrder
} from "../store/orderReducer";

const Checkout = (
    {
        regionList,
        selectedRegion,
        disableCartPreview,
        getRegionList,
        selectedCityId,
        getCityListByRegionId,
        setSelectedCity,
        submitOrder
    }) => {

    useEffect(() => {
        disableCartPreview()
    }, [disableCartPreview]);

    useEffect(() => {
        getRegionList();
    }, [getRegionList]);

    return <OrderPage
        regionList={regionList.idList.map(id => regionList.regions[id])}
        selectedRegionId={selectedRegion.id}
        cityList={selectedRegion.cityList.idList.map(id => selectedRegion.cityList.cities[id])}
        selectedCityId={selectedCityId}
        onRegionChange={getCityListByRegionId}
        onCityChange={setSelectedCity}
        onFormSubmit={submitOrder}/>
};
const mapStateToProps = (state) => {
    return {
        regionList: state.orderReducer.regionList,
        selectedRegion: state.orderReducer.selectedRegion,
        selectedCityId: state.orderReducer.selectedCityId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, {
    disableCartPreview,
    getRegionList,
    getCityListByRegionId,
    setSelectedCity,
    submitOrder
})(Checkout);
