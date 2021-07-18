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

//const API_URL = 'https://github.com/DorokhovaNA/JS-hw-level2/blob/main/catalog.json';
class Product {
    constructor({title, price, src, alt, id}) {
        this._title = title;
        this._price = price;
        this._src = src;
        this._alt = alt;
        this._id = id;
    }    
        
    getPrice() {
       return this._price;
    }
        
    render() {
        return `<div class="product__card-flex" id =${this._id}>
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


        
class ProductList {
    constructor (container) {
        this._products = [];
        this._$productsListContainer = container;
    }

    add(product) {
        this._products.push(product);
    }
      
    getPriceAll(){
        let countPrice = 0;
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
        
const products = new ProductList (document.querySelector('.product__card'));
fetch('https://raw.githubusercontent.com/DorokhovaNA/JS-hw-level2/main/catalog.json')
    .then((response) => {
        return response.json();   
    })
    .then( (response) => {
        response.forEach(newProduct => {  
            products.add(new Product(newProduct));
        });
        products.renderProductList();
    })
    .catch( (err) => {
        console.log(err)
    }) 

    
    class Cart {
        constructor({title, price, src, alt, id}) {
            this._title = title;
            this._price = price;
            this._src = src;
            this._alt = alt;
            this._id = id;
        }
        //подсчет суммы всех эл-в в корзине
        getPriceAll(){ 
            for( i=0; i<this._products.lehgth; i++) {
                countPrice = countPrice + this._products[i].this._price;
            } return this._price;      
        }

        //добавление товара в корзину
        addItemToCart(product) {
            let cartItem = this.products.filter(el => el.title == product.title)[0]

            if (cartItem != undefined) {
                cartItem.plusQuanity();
            } else { 
                let item = new ProductInCart(product);
                this.products.push(item);
            }
        }

        //удаление эл-та
        deleteProduct(index){
            this.goods.splice(index, 1);
            this.render();
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
    
        render(index) {
            return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p>
            <button class="reset-item" type="reset" data-product-index=${index} onclick="deleteProduct()><i class="fas fa-times-circle reset-icon"></i></button></div>`;
        }
    }           
        



