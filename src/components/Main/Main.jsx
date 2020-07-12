import React from "react";


import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import IndexPage from "./IndexPage/IndexPage";

const Main = () => {
    return (
        <main className="main">
            <CategoryNavbar/>
            <IndexPage/>
        </main>
    )
};

export default Main;