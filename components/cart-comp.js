const cartTemp = `<div class="cart__flex">
<div class="cart__menu">
    <slot name="title"></slot><cartItem v-for="good in cart" :key="good.id" :cartItem="good"></cartItem><slot name="totalCart"></slot>   
    <div class="cart__price">
        <h4 class="cart__title">TOTAL</h4>
        <h4 class="cart__title">500.00$</h4>
    </div>
    <div class="cart-button">
        <a href="checkout.html" class="button__checkout">Checkout</a><br>
        <a href="cart.html" class="button__checkout button__checkout_color">Go to Cart</a>
    </div>
</div>
</div>`

Vue.component('cart-comp', {
    template: cartTemp,
    props: ['cart','cartItem'],
    
})