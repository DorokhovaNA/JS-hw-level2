const offerTemp = `<section class="offer">
<div class="container offer">
    <div class="offer-block__left">
        <a class="offer-block__link" href="product.html"><div class="offer-block__left_top"><p class="offer-block__text">HOT DEAL<br><span class="text_color">FOR MEN</span></p></div></a> 
        <a class="offer-block__link" href="product.html"><div class="offer-block__left_bottom"><p class="offer-block__text">LUXIROUS & trendy<br><span class="text_color">ACCESORIES</span></p></div></a>
    </div>
    <div class="offer-block__right">
        <a class="offer-block__link" href="product.html"><div class="offer-block__right_top"><p class="offer-block__text">30% offer<br><span class="text_color">women</span></p></div></a>
        <a class="offer-block__link" href="product.html"><div class="offer-block__right_bottom"><p class="offer-block__text">new arrivals<br><span class="text_color">FOR kids</span></p></div></a>
    </div>
</div>
</section>`

Vue.component('offer-comp', {
    template: offerTemp
})