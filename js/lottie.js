
var animation = bodymovin.loadAnimation({
    container: document.getElementById('ferrisWheel'), // Required
    path: '../json/ferrisWheel.json', // Required
    animType: 'svg', // Required
    prerender: true,
    loop: true, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
})

$('#ferrisWheel').hover(function () {
    animation.play();
}, function () {
    animation.pause();
});