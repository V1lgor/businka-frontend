import React from 'react';

import styles from './Dashboard.module.css';
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import ProductDashboard from "./ProductDashboard/ProductDashboard";
import CategoryDashboard from "./CategoryDashboard/CategoryDashboard";

const Dashboard = (props) => {
    return (
        <div className={styles.Dashboard}>
            <Sidebar/>

            <Switch>
                <Route path={"/dashboard/product"}>
                    <ProductDashboard/>
                </Route>
                <Route path={"/dashboard/category"}>
                    <CategoryDashboard/>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;