const promoTemp = `<section class="promo-content container">
<div class="promo-content__left">
    <img src="img/promo__img.png" alt="promo">
    <p class="promo-content__text">30%<span class="promo-content__text_color">OFFER</span><br>
        <span class="promo-content__text_size">FOR WOMEN</span></p>
</div>
<div class="promo-content__right">
    <article class="promo__main">
        <img class="promo__img" src="img/promo__car.svg" alt="delivery">
        <div class="promo__text">
            <h5 class="promo__title">Free Delivery</h5>
            <p class="promo__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>       
    </article>
    <article class="promo__main">
        <img class="promo__img" src="img/promo__sale.svg" alt="sale">
        <div class="promo__text">
            <h5 class="promo__title">Sales & discounts</h5>
            <p class="promo__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>       
    </article>
    <article class="promo__main">
        <img class="promo__img" src="img/promo__crown.svg" alt="crown">
        <div class="promo__text">
            <h5 class="promo__title">Quality assurance</h5>
            <p class="promo__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>       
    </article>
</div>
</section>`

Vue.component('promo-comp', {
    template: promoTemp
})