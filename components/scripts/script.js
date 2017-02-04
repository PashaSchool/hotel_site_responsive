$(function() {

    var topoffset = 43;
    var onTouch = "ontouchstart" in document.documentElement;
    var wheight = $(window).height();
    
    $('.fullheight').css('height', wheight);
    $(window).resize(function() {
            var wheight = $(window).height();
            $('.fullheight').css('height', wheight);
        }) //on resize

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - topoffset
                }, 1000);
                return false;
            }
        }
    });
    //hilight navigation
    $(window).scroll(function() {
        var windopPos = $(window).scrollTop() + topoffset * 2;
        $('nav li a').removeClass('active');

        if (windopPos > $('#hotelinfo').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#hotelinfo"]').addClass('active');
        }
        if (windopPos > $('#rooms').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#rooms"]').addClass('active');
        }
        if (windopPos > $('#dining').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#dining"]').addClass('active');
        }
        if (windopPos > $('#events').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#events"]').addClass('active');
        }
        if (windopPos > $('#attractions').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#attractions"]').addClass('active');
        }
    });



    //controll of Scroll Magic
    var controller = new ScrollMagic.Controller();
    //pin navigations
    var pin = new ScrollMagic.Scene({
        triggerElement: "#nav",
        triggerHook: "onLeave"
    }).setPin('#nav').addTo(controller);

    if (!onTouch) {
        var beforeAnim = {
            bottom: -700,
            opacity: 0,
            scale: 0
        };

        var afterAnim = {
            repeat: 1,
            yoyo: true,
            bottom: 0,
            opacity: 1,
            scale: 1,
            ease: Back.easeOut
        };

        //tween Room
        var roomTween = TweenMax
            .staggerFromTo("#westminster .content", 1, beforeAnim, afterAnim);
        var pinRoom = new ScrollMagic.Scene({
            triggerElement: "#westminster",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"

        }).setPin('#westminster').setTween(roomTween).addTo(controller);
        //tween piccadilly
        var piccadillyTween = TweenMax.staggerFromTo("#piccadilly .content", 1, beforeAnim, afterAnim);

        var pinPiccadilly = new ScrollMagic.Scene({
            triggerElement: "#piccadilly",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"
        }).setPin('#piccadilly').setTween(piccadillyTween).addTo(controller);
        //tween cambridge 
        var cambridgeTween = TweenMax.staggerFromTo("#cambridge .content", 1, beforeAnim, afterAnim);

        var pinCambridge = new ScrollMagic.Scene({
            triggerElement: "#cambridge",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"
        }).setPin('#cambridge').setTween(cambridgeTween).addTo(controller);
        //tween oxford
        var oxfordTween = TweenMax.staggerFromTo("#oxford .content", 1, beforeAnim, afterAnim);

        var pinoxford = new ScrollMagic.Scene({
            triggerElement: "#oxford",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"
        }).setPin('#oxford').setTween(oxfordTween).addTo(controller);
        //tween victoria
        var victoriaTween = TweenMax.staggerFromTo("#victoria .content", 1, beforeAnim, afterAnim);

        var pinvictoria = new ScrollMagic.Scene({
            triggerElement: "#victoria",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"
        }).setPin('#victoria').setTween(victoriaTween).addTo(controller);
        //tween manchester
        var manchesterTween = TweenMax.staggerFromTo("#manchester .content", 1, beforeAnim, afterAnim);

        var pinmanchester = new ScrollMagic.Scene({
            triggerElement: "#manchester",
            offset: -topoffset,
            duration: 500,
            triggerHook: "onLeave"
        }).setPin('#manchester').setTween(manchesterTween).addTo(controller);
    }
    //attraction
    var attractionstween = TweenMax
        .staggerFromTo($('#attractions article'), 1, { opacity: 0, scale: 0 }, { delay: 1, opacity: 1, scale: 1, ease: Back.easeOut });

    var scene = new ScrollMagic.Scene({
            triggerElement: '#attractions',
            triggerHook: "onCenter"
        }).setTween(attractionstween)
        .addTo(controller);

}); //on load
