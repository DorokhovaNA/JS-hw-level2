class Cart {
    constructor(title, price, src, alt) {
        this._title = title;
        this._price = price;
        this._src = src;
        this._alt = alt;
    }
    //подсчет суммы всех эл-в в корзине
    getPriceAll(){ 
        for( i=0; i<this._products.lehgth; i++) {
            countPrice = countPrice + this._products[i].this._price;
        } return this._price;      
    }

    //удаление эл-та

    deleteProduct(){

    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}

class ProductInCart extends Cart {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this._quantity = quantity;
    }

    getPrice() {
        return this._price * this.quantity;
    }

    //увеличение кол-ва товара
    plusQuanity() {
        return this._quantity++;
    }

    //уменьшение кол-ва товара
    minusQuanity() {
        return this._quantity--;
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}