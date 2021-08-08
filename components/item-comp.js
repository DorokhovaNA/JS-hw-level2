const itemTemp = `<div class="product__card-flex">
<a class="product__card_link" href="singlepage.html">
<img class="product__img" :src="good.src" :alt="good.alt">
    <div class="product__card-block">
        <p class="product__card-text">{{good.title}}</p>
        <p class="product__card-text product__card-text_pink">$ {{good.price}}</p>
    </div>
</a>
<div class="product-add__item">
    <a :id="good.id" @click="addtoCart" class="product-add">
    <img class="cart-img" src="img/cart__white.svg" alt="cart">
    <span class="cart-text">Add to cart</span>
    </a>  
</div>
</div>`

Vue.component('item-comp', {
    template: itemTemp,
    props: ['good'],
    methods: {
        addtoCart() {
            this.$emit('add-to-cart',this.good.id);
        }    
    }
})