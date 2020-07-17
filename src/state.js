import axios from 'axios';

let getNewsList = () => {
    return axios.get('http://localhost:8080/news')
        .then(response => response.data)
};

let state = {
    menuItemList: [
        {title: "Главная", href: "/"},
        {title: "Каталог", href: "/catalog"},
        {title: "Новости", href: "/news"},
        {title: "Оплата и доставка", href: "/delivery"},
        {title: "О нас", href: "/about-us"},
    ],
    mainContent: {
        newsList: [
            {
                id: "1",
                title: "Какой-то заголовок",
                date: "12-07-2020 19:16",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, praesentium."
            },
            {
                id: "2",
                title: "Мы открылись!",
                date: "12-07-2020 19:16",
                text: "Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла"
            },
        ],
        categoryList: [
            {
                name: "Лента",
                subCategoryList: ["Лента атласная", "Лента репсовая"]
            },
            {
                name: "Тычинки",
                subCategoryList: null
            },
            {
                name: "Вышивка",
                subCategoryList: ["Наборы для вышивания", "Нитки", "Иглы"]
            },
            {
                name: "Фурнитура",
                subCategoryList: ["Магниты", "Заколки", "Детали"]
            },
            {
                name: "Флористика",
                subCategoryList: null
            },
        ]
    },
    getNewsList: getNewsList
};

export default state;