const products = [
    { src: 'img/prod_card1.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card2.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card3.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card4.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card5.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card6.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card7.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    },
    { src: 'img/prod_card8.png',
    alt: 'product', 
    title: 'Mango People T-shirt', 
    price: '52$' 
    }
];

const $productsList = document.querySelector('.product__card');
  
const renderProductsItem = ({ src, alt, title, price }) => {
    return `<div class="product__card-flex">
        <a class="product__card_link" href="singlepage.html">
        <img class="product__img" src=${src} alt=${alt}>
            <div class="product__card-block">
                <p class="product__card-text">${title}</p>
                <p class="product__card-text product__card-text_pink">${price}</p>
            </div>
        </a>
        <div class="product-add__item">
            <a class="product-add" href="cart.html">
            <img class="cart-img" src="img/cart__white.svg" alt="cart">
            <span class="cart-text">Add to cart</span>
            </a>  
        </div>
    </div>`;
};
  
const renderProductsList = (list = products) => {
    let productsList = list.map(
            item => renderProductsItem(item)
        ).join('');

    $productsList.insertAdjacentHTML('beforeend', productsList);
}
  
renderProductsList();