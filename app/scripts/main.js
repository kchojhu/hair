'use strict';
console.log('\'Allo \'Allo!');
$(function () {
    $.material.init();

    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
});