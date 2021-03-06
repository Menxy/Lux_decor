$(document).ready(function(){
    $('.big__slider').slick({
        arrows: true,
        dots: true,//положение меняется стилизацией контейнера .slick-dots
        adaptiveHeight: false, // если true для slick-track align-items: flex-start;
        //slidesToShow: 1, //количество отображаемых слайдов
        // slidesToScroll: 10, //количество слайдов перемотки
        // speed: 1000, // 300 умолчание в ms
        // easing: "ease", //как в анимации css
        // infinite: true, // бесконечная перемотка (true)
        // initialSlide: 2, //стартовый слайд
        // autoplay: true,  
        // autoplaySpeed: 2000, //ms, к autoplay
        // pauseOnDotsHover: true, // к autoplay
        draggable: true, //перетаскивание мышкой на ПК
        swipe: true, //перетаскивание тачскрином
        centerMode: false, //активный слайд по центру. Показывает 3 слайда. Получает класс .slick-center
        variableWidth: false, // сбрасывает width. Хорошо работает с centerMode, плохо со slidesToShow
        //appendArrows: $('.main__slider__container'),
        //respondTo: slider, // width к window, slider, min из двух
        //rtl: true, //right to left
    });
    $('.hits__slider').slick({
        arrows: true,
        dots: false,//положение меняется стилизацией контейнера .slick-dots
        slidesToShow: 4, //количество отображаемых слайдов
        responsive: [
            {breakpoint: 960, settings: {slidesToShow: 3}},
            {breakpoint: 768, settings: {slidesToShow: 2}},
            {breakpoint: 500, settings: {slidesToShow: 1}},
        ]
    });
})