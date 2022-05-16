// Open Responsive Menu
var burgerMenu = document.querySelector('.burger-menu');
var responsiveModal = document.querySelector('#responsive-modal');

burgerMenu.addEventListener('click', function(){
    responsiveModal.classList.toggle('active');
});

// Open Hidden Flag
var switchLanguages = document.querySelector('.switch-languages');
var hiddenFlag = document.querySelector('#hidden-flag');

switchLanguages.addEventListener('click', function(e){
    if( hiddenFlag.className === 'header-lang-icon__link' ) {
        hiddenFlag.classList.add('display-hidden-flag');
    } else {
        hiddenFlag.classList.remove('display-hidden-flag');
    }
    e.stopPropagation();
});

// Click on Document to hide Flag Icon
document.addEventListener('click', function(){
    if( hiddenFlag.classList.contains('display-hidden-flag') ) {
        hiddenFlag.classList.remove('display-hidden-flag');
    } else {
        hiddenFlag.classList = 'header-lang-icon__link';
    }
});




$(document).ready(function(){

    $(".top-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 6000
    });


    $(".bottom-carousel").owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplayTimeout: 4000,
        responsive:{
            240:{
                items:2
            },
            360:{
                items:3
            },
            480:{
                items:4
            },
            600:{
                items:4
            },
            768:{
                items:5
            },
            990:{
                items:6
            }

        }
    });

  }); // End document.ready()
