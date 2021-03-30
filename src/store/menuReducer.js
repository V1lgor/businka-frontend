const initialState = {
    menuItemList: [
        {
            title: "Главная",
            href: "/"
        },
        {
            title: "Каталог",
            href: "/catalog"
        },
        {
            title: "О нас",
            href: "/about-us"
        }
    ]
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default menuReducer;