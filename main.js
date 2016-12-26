$( document ).ready(function() {
    //Initialize the turn.js flipbook
    $('.magazine').turn({
            width: 1172,
            height:800,
            autoCenter: false,
            overflow: false,
    });



            // function regionClick(event) {

            //     var region = $(event.target);

            //     if (region.hasClass('region')) {

            //         alert('hola');

            //         $('#zoom-viewport').data().regionClicked = true;

            //         setTimeout(function() {
            //             $('#zoom-viewport').data().regionClicked = false;
            //         }, 100);

            //         var regionType = $.trim(region.attr('class').replace('region', ''));

            //         return processRegion(region, regionType);

            //     }
            // }





    //Initialize the zoom viewport
    $('#zoom-viewport').zoom({
            flipbook: $('.magazine')
    });

    //Binds the single tap event to the zoom function
    $('#zoom-viewport').bind('zoom.tap', zoomTo);

    //Optional, calls the resize function when the window changes, useful when viewing on tablet or mobile phones
    $(window).resize(function() {
        resizeViewport();
    }).bind('orientationchange', function() {
        resizeViewport();
    });

    //Must be called initially to setup the size
    resizeViewport();
});

function zoomTo(event) {       
        setTimeout(function() {
            if ($('#zoom-viewport').data().regionClicked) {
                $('#zoom-viewport').data().regionClicked = false;
            } else {
                if ($('#zoom-viewport').zoom('value')==1) {
                    $('#zoom-viewport').zoom('zoomIn', event);
                } else {
                    $('#zoom-viewport').zoom('zoomOut');
                }
            }
        }, 1);
}

function resizeViewport() {
    var width = $(window).width(),
        height = $(window).height(),
        options = $('.magazine').turn('options');

    $('#zoom-viewport').css({
        width: width,
        height: height
    }).zoom('resize');
}




// var oTurn = $('#flipbook').turn({
//     autoCenter: true,
//     width: 1172,
//     height: 800,
//     display: 'double',
//     // page:1,
//     // acceleration: true,
//     // elevation: 1,
//     next: true,
//  });


// $("#prev").click(function(e){
//     e.preventDefault();
//     oTurn.turn("previous");
// });

// $("#next").click(function(e){
//     e.preventDefault();
//     oTurn.turn("next");
// });

// $("#prev").hide();

// $("#flipbook").bind("turning", function(event, page, view) {
//   $("#prev").show();
//   $("#next").show();
// });

// $("#flipbook").bind("first", function(event) {
//   $("#prev").hide();
// });

// $("#flipbook").bind("last", function(event) {
//   $("#next").hide();
// });

// $('.zoom').on('click',function (e){
//     $('#zoom-viewport').zoom('zoomIn',pos);
// });

// $('#antizoomjs').on('click',function (e){
//     $('.antizoom').zoom('zoomOut');
// });

// $('.zoom').click(function(e) {
//     var pos = {
//         x: e.pageX - $(this).offset().left,
//         y: e.pageY - $(this).offset().top
//     };
//     $('#flipbook').zoom('zoomIn', pos);
// });




