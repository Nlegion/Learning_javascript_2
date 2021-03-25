var btnBasket = document.querySelector('.btn-cart');  // получение события нажатия

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`) //получение списка товаров
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();


class Basket {
    getBasket() {
        return fetch(`${API}/getBasket.json`) //получение списка товаров
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    //добавление
    addGoods() {

    }
    //удаление
    removeGoods() {

    }
    //изменение
    changeGoods() {

    }
    //обновление
    render() {

    }
}

var openBasket = () => {
    //Basket.render(); 
    console.log(Basket.getBasket); //вывод содержимого из api
};

btnBasket.addEventListener('click', openBasket);

