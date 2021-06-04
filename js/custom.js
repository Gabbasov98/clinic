$(window).scroll(function() {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 100) {
        $('.top-header').addClass('header-fixed');
    } else {
        /*Если меньше 100px удаляем класс для header*/
        $('.top-header').removeClass('header-fixed');
    }
});


$(document).ready(function() {

    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.customer-logos').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 556000,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        nextArrow: '<img src="./img/next.svg" class="next">',
        prevArrow: '<img src="./img/prev.svg" class="prev">',
        responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });






    var $status = $('.pagingInfo');
    var $slickElement = $('.customer-logos2');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        slide: '.slide',
        autoplay: true,
        autoplaySpeed: 556000,
        fade: true,
        dots: false,
        arrows: false,
    });

    $(".open-info").click(function() {
        $(this).hide();
        $(".hidden-info").show();

    })
    $(".close-info").click(function() {
        $(".hidden-info").hide();
        $(".open-info").show()
    })





});