$(document).ready(function () {
    $('.slider').slider({
        indicators: false,
        height: 400,
        transition: 500,
        interval: 5000
    });
    $('#feedback .carousel-slider').carousel({
        dist: 0,
        fullWidth: true
    });

    $('#feedback .carousel-slider')
        .mouseenter(function () {
            $('.feedback-nav').show();
        })
        .mouseleave(function () {
            $('.feedback-nav').hide();
        });


    $('.feedback-nav').click(function (e) {
        e.preventDefault();
        switch ($(this).attr("id")) {
            case "feedback-prev":
                $('#feedback .carousel').carousel('prev');
                break;
            case "feedback-next":
                $('#feedback .carousel').carousel('next');
                break;
        }; 
        clearInterval(myInterval);
        // reset timer
        myInterval = setInterval(function () {
            $('#feedback .carousel').carousel('next');
        }, 4000);
    });
    var myInterval = setInterval(function () {
        $('#feedback .carousel').carousel('next');
    }, 4000);

    $(".button-collapse").sideNav();

    // set columns' height are all the same in grid
    $(".table-row").each(function () {
        var maxHeight = 0;
        $(this).children().each(function () {
            maxHeight = maxHeight > $(this).height() ?
                maxHeight : $(this).height();
        });
        $(this).children().height(maxHeight);
        //console.log(heights);
    });
    // My Coding-Styles Romance by L.D.K aka "Dolphin Dreams"

});