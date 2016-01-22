'use strict';
$(function () {
    $.material.init();

    $(window).on("reize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $(window).on("load", function () {
        $(".fill-screen").css("height", window.innerHeight);

        $('body').scrollspy({
            target: '.navbar',
            offset: 160
        });

        //        setTimeout(updateScrollSpy, 500);
        //
        //        function updateScrollSpy() {
        //            jQuery('.navbar').each(function () {
        //                var $spy = jQuery(this).scrollspy('refresh')
        //            });
        //        }

        $('ul.nav a, .down-button a').bind('click', function () {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $(window).stellar();
        new WOW().init();
        $('#gallery').nanoGallery();
        $('body').animate({
            'opacity': 1
        }, 500);
    });

    //    var url = window.location;
    //        $('ul.nav a[href="' + url + '"]').parent().addClass('active');
    //    $('ul.nav a').filter(function () {
    //        return this.href == url;
    //    }).parent().addClass('active');





    console.log('done');

    //    $("#video-wallpaper").background({
    //        source: {
    //            poster: "../images/Salon_Banner.jpg",
    //            //video: "www.youtube.com/watch?v=IqTtV-LsTqY"
    //        }
    //    })
});