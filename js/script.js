$('.header__button').click(function(){
    $('.header__menu').toggleClass('header__menu--active');
    $('.header__button-line-top').toggleClass('header__button-line-top--active')
    $('.header__button-line-center').toggleClass('header__button-line-center--active')
    $('.header__button-line-bottom').toggleClass('header__button-line-bottom--active')
    $('.header__button').toggleClass('header__button--active')
})

// $('.header__button-cross-wrap').click(function(){
//     $('.header__menu').removeClass('header__menu--active');
// })