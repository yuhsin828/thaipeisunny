const topNav = $('#topNav').offset().top;
// console.log(topNav);

$(document).ready(function () {
    fixedNav(); /* nav固定在上方 */
    goTop(); /* 回到頂部 */
    scrollDown(); /* 往下滑 */
});

function fixedNav() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > topNav) {  /* 滑動到nav的距離 */
            $('.navbar-brand').removeClass('d-none');
            $('.navbar').addClass('nav_top bg_lattice shadow-sm');
            $('.nav-link').removeClass('nav_btn');
            $('#navList').removeClass('mx-auto nav_list_bg');
            $('#navList').addClass('ms-auto');
            $('nav .text_dark').hover(function () {
                $(this).css('color', '#FA760A');
            }, function () {
                $(this).css('color', '#333333');
            });
        } else {
            $('.navbar-brand').addClass('d-none');
            $('.navbar').removeClass('nav_top bg_lattice shadow-sm');
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

function goTop() {
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > topNav) {
            $('#goTop').fadeIn(200);
        } else {
            $('#goTop').stop().fadeOut(200);
        }
    }).scroll();
};

function scrollDown() {
    const topSec = $('#section1').offset().top - $('.navbar-toggler').innerHeight();
    $('#scrollDown').click(function () {
        $('html,body').animate({ scrollTop: topSec }, 200);
    });
};