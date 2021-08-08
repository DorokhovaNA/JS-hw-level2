const headerTemp = `<header class="header">
<div class="header-top  container">
    <div class="header-top__left">
        <a @click="logoClickHandler" class="logo"><p class="logo__text">BRAN<span class="logo__text_red">D</span></p></a>
        <details class="dropdown">
            <summary>Browse</summary>
            <div class="dropdown-menu">
                <h4 class="megabox-flex__title">WOMEN</h4>
                <a href="#" class="megabox-flex__link">Dresses</a>
                <a href="#" class="megabox-flex__link">Tops</a>
                <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                <a href="#" class="megabox-flex__link">Blazers</a>
                <a href="#" class="megabox-flex__link">Denim</a>
                <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                <a href="#" class="megabox-flex__link">Accessories</a>
            </div>
        </details>
        <div class="search-form">
            <search-comp v-on:filtered="filtered"></search-comp>
            
        </div>
    </div>
    <div class="header-top__right">
        <div class="cart-list">
            <a @click="cartBtnHandler" class="logo-basket"><span class="logo-basket_count">{{ cart.length }}</span></a>
            <cart-comp v-bind:cart="cart"></cart-comp>
        </div>       
        <a href="checkout.html" class="button__account">My Account<i class="fas fa-caret-down fa-caret-down_color"></i></a>
    </div>
</div>
<hr class="header-border" color="#ececec">
<div class="header-nav container">
    <nav class="menu">
        <ul class="menu-box">
            <li class="menu-list"><a class="menu__item menu__item_active" href="#">HOME</a>
            <div class="megabox">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div> 
            </li>
            <li class="menu-list"><a class="menu__item" href="product.html">MAN</a>
            <div class="megabox">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div>    
            </li>
            <li class="menu-list"><a class="menu__item" href="#">WOMEN</a>
            <div class="megabox">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div>    
            </li>
            <li class="menu-list center"><a class="menu__item" href="#">KIDS</a>
            <div class="megabox megabox_center">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div> 
            </li>
            <li class="menu-list last"><a class="menu__item" href="#">ACCOSERIESE</a>
            <div class="megabox megabox_last">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div> 
            </li>
            <li class="menu-list last"><a class="menu__item" href="#">FEATURED</a>
            <div class="megabox megabox_last">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div> 
            </li>
            <li class="menu-list last"><a class="menu__item" href="#">HOT&nbsp;DEALS</a>
            <div class="megabox megabox_last">
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <a href="#" class="megabox-flex__link">Blazers</a>
                    <a href="#" class="megabox-flex__link">Denim</a>
                    <a href="#" class="megabox-flex__link">Leggins/Pants</a>
                    <a href="#" class="megabox-flex__link">Skirts/Shorts</a>
                    <a href="#" class="megabox-flex__link">Accessories</a>
                </div>
                <div class="megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                </div>
                <div class="megabox-flex megabox-flex">
                    <h4 class="megabox-flex__title">WOMEN</h4>
                    <a href="#" class="megabox-flex__link">Dresses</a>
                    <a href="#" class="megabox-flex__link">Tops</a>
                    <a href="#" class="megabox-flex__link">Sweaters/Knits</a>
                    <a href="#" class="megabox-flex__link">Jackets/Coats</a>
                    <div></div>
                    <div class="megabox-flex__img"></div>
                </div>
            </div> 
            </li>          
        </ul>
    </nav>
</div>    
</header>`

Vue.component('header-comp', {
    template: headerTemp,
    methods: {
        logoClickHandler() {
            this.$emit('goTo','index')
        },
        cartBtnHandler() {
            this.$emit('goTo','cart')
        },
        filtered(searchLine) {
            this.$emit('filtered', this.searchLine)
        }

    },
    props: ['cart']
    
})