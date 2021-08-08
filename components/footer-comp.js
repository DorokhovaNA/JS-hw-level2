const footerTemp = `<footer>
<section class="feedback">
    <div class="feedback-sec container">
        <figure class="feedback__block">
            <img class="feedback__img" src="img/answer.png" alt="photo">
            <p class="feedback__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, 
                    a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
            <figcaption class="feedback__sig">Bin Burhan<br><span class="feedback__sig_simple">Dhaka, Bd</span>
            </figcaption>    
        </figure>
        <div class="feedback__bd"></div>
        <div class="feedback__form">
            <h4 class="feedback__title">Subscribe</h4>
            <p class="feedback__subtitle">FOR OUR NEWLETTER AND PROMOTION</p>
            <form action="input" class="feedback__input"> 
                <input class="feedback__email" id="email" type="email" placeholder="Enter Your Email">
                <button type="submit" class="feedback__button">Subscribe</button>
            </form>
        </div>            
    </div>   
</section>
<section>
    <div class="footer__main container">
        <div class="footer__left">
            <div class="footer__logo">
                <a href="index.html" class="logo"><p class="logo__text">BRAN<span class="logo__text_red">D</span></p></a>
            </div>
            <p class="footer__text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. 
                <br>
                <br>
                Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.                        
            </p>
        </div> 
        <div class="footer__right">
            <div class="footer-column">
                <h4 class="footer__title">COMPANY</h4>
                <ul class="footer__menu">
                    <li class="footer__item"><a class="footer__link" href="#">Home</a></li>
                    <li class="footer__item"><a class="footer__link" href="#">Shop</a></li>
                    <li class="footer__item"><a class="footer__link" href="#">About</a></li>
                    <li class="footer__item"><a class="footer__link" href="#">How It Works</a></li>
                    <li class="footer__item"><a class="footer__link" href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">   
                <h4 class="footer__title">INFORMATION</h4>
                <ul class="footer__menu">
                    <li class="footer__item"><a class="footer__link" href="#">Tearms & Condition</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Privacy Policy</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">How to Buy</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">How to Sell</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Promotion</a></li>
                </ul>
            </div>
            <div class="footer-column">  
                <h4 class="footer__title">SHOP CATEGORY</h4>
                <ul class="footer__menu">
                    <li class="footer__item"><a  class="footer__link" href="#">Men</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Women</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Child</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Apparel</a></li>
                    <li class="footer__item"><a  class="footer__link" href="#">Brows All</a></li>
                </ul>
            </div>
        </div>     
    </div>
</section>
<section class="footer-end">
    <div class="footer-end__main container">
        <h4 class="footer-end__text">&#x2117;2017 Brand All Rights Reserved.</h4>
        <div class="footer-end__social">
            <a class="footer-end__icons" href="#"><i class="fab fa-facebook-f social"></i></a>
            <a class="footer-end__icons" href="#"><i class="fab fa-pinterest-p social"></i></a>
            <a class="footer-end__icons" href="#"><i class="fab fa-telegram-plane social"></i></a>
            <a class="footer-end__icons" href="#"><i class="fab fa-linkedin-in social"></i></a>
            <a class="footer-end__icons" href="#"><i class="fab fa-instagram social"></i></a>
        </div>
    </div>        
</section>
</footer>`

Vue.component('footer-comp', {
    template: footerTemp
})