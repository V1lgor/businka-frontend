import React, {useEffect} from 'react';

import styles from './ProductDashboard.module.css';
import ProductTable from "../../../components/Dashboard/ProductTable/ProductTable";
import {getFullProductList} from "../../../store/productReducer";
import {connect} from "react-redux";

const ProductDashboard = (props) => {
    console.log(props);
    useEffect(() => {
        props.loadProductList()
    }, []);

    return (
        <div className={styles.ProductDashboard}>
            <h1>Просмотр списка товаров</h1>

            <ProductTable productList = {props.productList}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProductList: () => dispatch(getFullProductList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDashboard);