$('.moveTo').click(function () {
    const item = $('#zhuyinMain').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: item }, 200);
});