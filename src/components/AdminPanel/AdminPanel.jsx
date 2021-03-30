import React from 'react';

const AdminPanel = (props) => {
    return (
        <div className="admin-panel">
            <div className="admin-panel__header">
                <ul className="admin-panel__header-menu">
                    <li className="admin-panel__header-menu-item">Вернуться на сайт</li>
                    <li className="admin-panel__header-menu-item">Новые заказы: 0</li>
                    <li className="admin-panel__header-menu-item">Пользователи</li>
                </ul>
            </div>
        </div>
    )
}