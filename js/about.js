$('#itemClick1').click(function () {
    const item1 = $('#list-item-1').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: item1 }, 200);
});

$('#itemClick2').click(function () {
    const item2 = $('#list-item-2').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: item2 }, 200);
});

$('#itemClick3').click(function () {
    const item3 = $('#list-item-3').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: item3 }, 200);
});

$('#itemClick4').click(function () {
    const item4 = $('#list-item-4').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: item4 }, 200);
});