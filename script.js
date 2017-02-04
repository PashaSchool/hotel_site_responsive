$(function() {
    var wheight = $(window).height();
    $('.fullheight').css('height', wheight);
    $(window).resize(function() {
            var wheight = $(window).height();
            $('.fullheight').css('height', wheight);
        }) //on resize

    var controller = new ScrollMagic.Controller();

    var attractionstween = TweenMax
    .staggerFromTo($('#attractions article'), 1, { opacity: 0, scale: 0 }, { delay: 1, opacity: 1, scale: 1 });
    var scene = new ScrollMagic.Scene({
            triggerElement: '#attractions'
        }).setTween(attractionstween).addTo(controller);
}); //on load
