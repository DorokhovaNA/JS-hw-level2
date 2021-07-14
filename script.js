        // const products = [
        //     { src: 'img/prod_card1.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card2.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card3.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card4.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card5.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card6.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card7.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     },
        //     { src: 'img/prod_card8.png',
        //     alt: 'product', 
        //     title: 'Mango People T-shirt', 
        //     price: '52$' 
        //     }
        // ];

        // const $productsList = document.querySelector('.product__card');
        
        // const renderProductsItem = ({ src, alt, title, price }) => {
        //     return `<div class="product__card-flex">
        //         <a class="product__card_link" href="singlepage.html">
        //         <img class="product__img" src=${src} alt=${alt}>
        //             <div class="product__card-block">
        //                 <p class="product__card-text">${title}</p>
        //                 <p class="product__card-text product__card-text_pink">${price}</p>
        //             </div>
        //         </a>
        //         <div class="product-add__item">
        //             <a class="product-add" href="cart.html">
        //             <img class="cart-img" src="img/cart__white.svg" alt="cart">
        //             <span class="cart-text">Add to cart</span>
        //             </a>  
        //         </div>
        //     </div>`;
        // };
        
        // const renderProductsList = (list = products) => {
        //     let productsList = list.map(
        //             item => renderProductsItem(item)
        //         ).join('');

        //     $productsList.insertAdjacentHTML('beforeend', productsList);
        // }
        
        // renderProductsList();
class Product {
    constructor(title, price, src, alt) {
        this._title = title;
        this._price = price;
        this._src = src;
        this._alt = alt;
    }    
        
    getPrice() {
       return this._price;
    }
        
    render() {
        return `<div class="product__card-flex">
                    <a class="product__card_link" href="singlepage.html">
                    <img class="product__img" src=${this._src} alt=${this._alt}>
                    <div class="product__card-block">
                        <p class="product__card-text">${this._title}</p>
                        <p class="product__card-text product__card-text_pink">${this._price} $</p>
                    </div>
                </a>
                <div class="product-add__item">
                    <a class="product-add" href="cart.html">
                    <img class="cart-img" src="img/cart__white.svg" alt="cart">
                    <span class="cart-text">Add to cart</span>
                    </a>  
                </div>
            </div>`;
    }
}

let countPrice = 0;
        
class ProductList {
    constructor (products, container) {
        this._products = products;
        this._$productsListContainer = container;
    }
            
    getPriceAll(){
        for( i=0; i<this._products.lehgth; i++) {
            countPrice = countPrice + this._products[i].this._price;
        } return this._price;      
    }
    renderProductList() {
        let productsList = this._products.map(
            item => item.render()
        ).join(' ');
            
        this._$productsListContainer.insertAdjacentHTML('beforeend', productsList);    
    }
}        
        
const products = new ProductList ([
    new Product('Mango People T-shirt', 52, 'img/prod_card1.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card2.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card3.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card4.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card5.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card6.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card7.png', 'product'),
    new Product('Mango People T-shirt', 52, 'img/prod_card8.png', 'product'),
], document.querySelector('.product__card'));
        
        
products.renderProductList();


