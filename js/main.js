$(document).ready(function () {
    fixedNav();
});

function fixedNav() {
    const topNav = $('#topNav').offset().top;
    // console.log(topNav);
    $(window).scroll(function () {
        if ($(this).scrollTop() > topNav) {  /* 滑動到nav的距離 */
            $('.navbar-brand').removeClass('d-none');
            $('.navbar').addClass('nav_top bg_yellow shadow-sm');
            $('.nav-link').removeClass('nav_btn');
            $('#navList').removeClass('mx-auto nav_list_bg');
            $('#navList').addClass('ms-auto');
            $('nav .text_dark').hover(function () {
                $(this).css('color', '#000000');
            }, function () {
                $(this).css('color', '#333333');
            });
        } else {
            $('.navbar-brand').addClass('d-none');
            $('.navbar').removeClass('nav_top bg_yellow shadow-sm');
            $('.nav-link').addClass('nav_btn');
            $('#navList').addClass('mx-auto nav_list_bg');
            $('#navList').removeClass('ms-auto');
            $('nav .text_dark').hover(function () {
                $(this).css('color', '');
            }, function () {
                $(this).css('color', '');
            });
        }
    });
}