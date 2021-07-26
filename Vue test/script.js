
const app = new Vue({
    el: '#app',
    data: {
        isVisibleCart: false,
        goods: [],
        id: '',
        filteredGoods: [],
        searchLine: '',
        cart: [],
       
        newTitle:'',
        newPrice: 0
    },
    methods: {
        filtered() {
            const search = new RegExp(this.searchLine);
            this.filteredGoods = this.goods.filter((good) => search.test(good.title));
            this.searchLine = '';
        },
        addToCart(event) {
            this.cart.push(this.goods[event.target.id]);
            console.log(this.cart);
        },
        showCart() {
            this.isVisibleCart = !this.isVisibleCart;
        }

    },
    mounted() {
        fetch('catalog.json')
            .then((responce) => responce.json())
            .then((responce) => this.goods = responce)
            .then((responce) => this.filteredGoods = responce)    
    },
})
      
    


    



