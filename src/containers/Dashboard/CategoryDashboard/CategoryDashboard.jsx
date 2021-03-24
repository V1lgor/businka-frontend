import React, {useEffect, useState} from 'react';

import * as actions from '../../../store/actions';

import styles from './CategoryDashboard.module.css';

import {connect} from "react-redux";
import CategoryTable from "../../../components/Dashboard/CategoryTable/CategoryTable";
import CategoryDeleteWarning from "../../../components/Dashboard/CategoryDeleteWarning/CategoryDeleteWarning";
import Modal from "../../../components/UI/Modal/Modal";
import PopUpNotification from "../../../components/UI/PopUpNotification/PopUpNotification";
import NotificationContainer from "../../NotificationContainer/NotificationContainer";
import Button from "../../../components/UI/Button/Button";

const CategoryDashboard = (props) => {
    useEffect(() => {
        props.loadCategoryList()
    }, []);

    const [showDeleteWarning, setShowDeleteWarning] = useState(false);
    const [categoryIdToDelete, setCategoryIdToDelete] = useState(0);

    const startCategoryDelete = (categoryId) => {
        setShowDeleteWarning(true);
        setCategoryIdToDelete(categoryId);
    }

    const cancelCategoryDelete = () => {
        setShowDeleteWarning(false);
        setCategoryIdToDelete(0);
    }

    const deleteCategory = () => {
        props.onCategoryDelete(categoryIdToDelete);
        props.loadCategoryList();
        cancelCategoryDelete();
    }

    let deleteWarningModal = null;

    if (showDeleteWarning) {
        const category = props.categoryList.categories[categoryIdToDelete];
        deleteWarningModal =
            <Modal onBackdropClick={cancelCategoryDelete} width={"auto"}>
                <CategoryDeleteWarning categoryName={category.name}
                                       onDeleteConfirm={deleteCategory}
                                       onDeleteCancel={cancelCategoryDelete}/>
            </Modal>
    }

    return (
        <div className={styles.CategoryDashboard}>
            {deleteWarningModal}
            <NotificationContainer/>
            <h1>Просмотр списка категорий</h1>
            <Button text={"Добавить уведомление"} onClick={() => props.pushNotification("Fuck you", "success")}/>
            <CategoryTable categoryList={props.categoryList} onCategoryDelete={startCategoryDelete}/>
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
        onCategoryDelete: (categoryId) => dispatch(actions.deleteCategory(categoryId)),
        pushNotification: (text, type) => dispatch(actions.pushNotificationWithTimeout(text, type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard);