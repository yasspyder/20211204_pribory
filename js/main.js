const products = [
    { id: 1, title: 'Манометр', price: 1200, img: 'manometr.png' },
    { id: 2, title: 'Термометр', price: 2000, img: 'termometr.png' },
    { id: 3, title: 'Датчик давления', price: 10000, img: 'pressure.png' },
    { id: 4, title: 'Расходомер', price: 50000, img: 'rashodomer.png' },
];
//Функция для формирования верстки каждого товара

const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.img}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(product =>
        renderProduct(product)).join('');

};

renderPage(products);




