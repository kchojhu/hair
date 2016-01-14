'use strict';
console.log('\'Allo \'Allo!');
$(function () {
    $.material.init();

    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $("#video-wallpaper").background({
        source: {
            poster: "resource/img/Salon_Banner.jpg",
            //video: "www.youtube.com/watch?v=IqTtV-LsTqY"
        }
    })
});