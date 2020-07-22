//загрузка сверху страницы
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$( document ).ready(function() {

    AOS.init({disable: 'mobile'});

    //video-hover
    var figure = $(".video-wrapper").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }

    $('.reviews-video-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        dots: true
    });


});
