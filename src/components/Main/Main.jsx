import React from "react";

import styles from './Main.module.css';
import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage/IndexPage";

const Main = () => {
    return (
        <main className={styles.Main}>
            <CategoryNavbar/>
            <IndexPage/>
        </main>
    )
};

export default Main;