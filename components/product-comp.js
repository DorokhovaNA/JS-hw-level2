const productTemp = `<section class="product container">
<h4 class="product__title">Fetured Items</h4>
<p class="product__subtitle">Shop for items based on what we featured in this week</p>
<div class="product__card">
<item-comp v-for="good in goods" v-bind:good="good" @add-to-cart="addtoCart"></item-comp>
</div>
<a href="product.html" class="product__button">Browse All Product<i class="fas fa-arrow-right"></i></a>
</section>`

Vue.component('product-comp', {
    template: productTemp,
    props: ['goods'],
    methods: {
        addtoCart(id) {
            this.$emit('add-to-cart',id)
        }
    }
})