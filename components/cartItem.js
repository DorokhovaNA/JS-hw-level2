const cartItemTemp = `<div class="cart__menu_item">
<a href="singlepage.html" class="cart__menu__link">
<figure class="cart-content">
        <figcaption class="cart-content__text">
            <img class="cart-item_good" :src="cartItem.src" :alt="cartItem.alt">
            <div class="cart-item_content">
                <h6 class="cart-content__name"> {{ cartItem.title }}</h6>
                <div>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="fas fa-star star"></i>
                    <i class="far fa-star star"></i>
                </div>
                <h6 class="cart-content__name cart-content__name_color">{{ cartItem.quantity}} x {{ cartItem.price }} $</h6>
            </div>
        </figcaption>
</figure>
</a>
<button type="reset" class="reset-item reset-item__cart" :id="cartItem.id"><i class="fas fa-times-circle reset-icon"></i></button>
</div>`

Vue.component('cartItem', {
    template: cartItemTemp,
    props: ['cart','cartItem'],
    methods: {
        addtoCart(id) {
            this.$emit('add-to-cart',this.cart);
        }    
    }
})

//
