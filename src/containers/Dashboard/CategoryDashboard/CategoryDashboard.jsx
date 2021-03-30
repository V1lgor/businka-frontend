import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import styles from './CategoryDashboard.module.css';

import * as actions from '../../../store/actions';

import NotificationContainer from "../../NotificationContainer/NotificationContainer";

import CategoryTable from "../../../components/Dashboard/CategoryTable/CategoryTable";
import CategoryDeleteWarning from "../../../components/Dashboard/CategoryDeleteWarning/CategoryDeleteWarning";
import Modal from "../../../components/UI/Modal/Modal";

const CategoryDashboard = ({loadCategoryList, onCategoryDelete, categoryList}) => {

    useEffect(() => {
        loadCategoryList()
    }, [loadCategoryList]);

    const [isDeleteWarningVisible, setDeleteWarningVisible] = useState(false);
    const [categoryIdToBeDeleted, setCategoryIdToBeDeleted] = useState(0);

    const handleDeleteCategoryButtonClick = (categoryId) => {
        setDeleteWarningVisible(true);
        setCategoryIdToBeDeleted(categoryId);
    }

    const handleCategoryDeletionCancel = () => {
        setDeleteWarningVisible(false);
        setCategoryIdToBeDeleted(0);
    }

    const handleCategoryDeletionConfirm = () => {
        onCategoryDelete(categoryIdToBeDeleted);
        loadCategoryList();
        handleCategoryDeletionCancel();
    }

    let deleteWarningModal = null;

    if (isDeleteWarningVisible) {
        const categoryToBeDeleted = categoryList.byId[categoryIdToBeDeleted];
        deleteWarningModal =
            <Modal onBackdropClick={handleCategoryDeletionCancel} width={"auto"}>
                <CategoryDeleteWarning categoryName={categoryToBeDeleted.name}
                                       onDeleteConfirm={handleCategoryDeletionConfirm}
                                       onDeleteCancel={handleCategoryDeletionCancel}/>
            </Modal>
    }

    return (
        <div className={styles.CategoryDashboard}>
            {deleteWarningModal}
            <NotificationContainer/>
            <h1>Просмотр списка категорий</h1>
            <CategoryTable categoryList={categoryList} onCategoryDelete={handleDeleteCategoryButtonClick}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryReducer.categoryList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategoryList: () => dispatch(actions.loadCategoryList()),
        onCategoryDelete: (categoryId) => dispatch(actions.deleteCategory(categoryId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard);