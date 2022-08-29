const topNav = $('#topNav').offset().top;

$(document).ready(function () {
    goTop(); /* 回到頂部 */
});

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