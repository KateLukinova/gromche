
$( document ).ready(function() {

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    // audio

    $('.audio-track').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause', 'progress', 'current'],
        audioVolume: 'horizontal',
        audioHeight: 60
    });

    // video

    $('.video').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause', 'progress', 'current']
    });


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

    //tabs
    $(".progress-item").click(function() {
        $(".progress-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //progress bar

    var bar = new ProgressBar.Circle(circleProgress, {
        color: '#73738D',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 35,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#6EB2C1', width: 1 },
        to: { color: '#6EB2C1', width: 35 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            //circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });

    bar.animate(0.25);  // Number from 0.0 to 1.0

    // collapse-block

    var isVideoBoxOpened = true;

    $('.exercise-video .name').on('click', function() {

        $(this).toggleClass('no-active')

        if (isVideoBoxOpened) {
            $(this).siblings().slideUp()
        } else {
            $(this).siblings().slideDown()
        }

        isVideoBoxOpened = ! isVideoBoxOpened;

    });

    var isAudioBoxOpened = true;

    $('.scales-caption').on('click', function() {

        $(this).toggleClass('no-active')

        if (isAudioBoxOpened) {
            $(this).siblings().slideUp()
        } else {
            $(this).siblings().slideDown()
        }

        isAudioBoxOpened = ! isAudioBoxOpened;

    });

});
