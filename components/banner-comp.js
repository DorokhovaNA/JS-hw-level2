const bannerTemp = `<section class="banner">
<div class="container banner__content">
    <div class="banner__content-text">
        <div class="banner__content_strip"></div>
        <h5 class="banner__content-text_title">THE BRAND</h5>
        <p class="banner__content-text_subtitle">OF LUXERIOUS <span class="banner__content-text_subtitle banner__content-text_color">FASHION</span></p>
    </div>
</div>
</section>`

Vue.component('banner-comp', {
    template: bannerTemp
})