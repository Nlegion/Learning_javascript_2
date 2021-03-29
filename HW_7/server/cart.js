let add = (cart, req) => { //добавление товара
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4); //объект в строку
};
let change = (cart, req) => { //изменение товара в корзине
    let find = cart.contents.find(el => el.id_product === +req.params.id); //поиск отваров по id
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

module.exports = { // 'экспорт модуля
    add,
    change
};