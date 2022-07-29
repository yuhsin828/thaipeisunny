$(document).ready(function () {
    fixedNav();
});

function fixedNav() {
    const topNav = $('#topNav').offset().top;
    // console.log(topNav);
    $(window).scroll(function () {
        if ($(this).scrollTop() > topNav) {          /* 滑動到nav的距離 */
            $('.navbar-brand').removeClass('d-none');
            $('.navbar').addClass('nav_top');     /* 加上固定效果 */
            $('.nav-link').removeClass('nav_btn');
            $('#navList').removeClass('mx-auto');
            $('#navList').addClass('ms-auto');
            
        } else {
            $('.navbar-brand').addClass('d-none');
            $('.navbar').removeClass('nav_top');  /* 移除固定效果 */
            $('.nav-link').addClass('nav_btn');
            $('#navList').addClass('mx-auto');
            $('#navList').removeClass('ms-auto');
            
        }
    });
}