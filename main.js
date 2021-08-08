const app = new Vue({
    el: '#app',
    data: {
        isVisibleCart: false,
        goods: [],
        filteredGoods: [],
        cart: [],
        newTitle:'',
        newPrice: 0,
        count: 0
    },
    methods: {
        filtered() {
            const search = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter((good) => search.test(good.title));
            console.log(this.filteredGoods);    
        },
        goToCart(target) {
            this.currentPage = target;
        },
        addToCart(id) {
            const good = this.goods.find(good => good.id === id)
            
            this.cart.push(good);
            console.log(this.cart);
        },

    },
    mounted() {
        fetch('catalog.json')
            .then((responce) => responce.json())
            .then((responce) => this.goods = responce)
            .then((responce) => this.goods = this.filteredGoods = responce)
            .catch(e => console.log(e))
            console.log(this.filteredGoods);
                
    }
})