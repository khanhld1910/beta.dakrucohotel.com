$(document).ready(function () {
    $('.slider').slider({
        indicators: false,
        height: 400,
        transition: 500,
        interval: 5000
    });
    $(".button-collapse").sideNav();

    // set columns' height are all the same in grid
    $(".table-row").each(function () {
        var maxHeight = 0;
        $(this).children().each(function () {
            maxHeight = maxHeight > $(this).height()
                ? maxHeight : $(this).height();
        });
        $(this).children().height(maxHeight);
        //console.log(heights);
    });
    // My Coding-Styles Romance by L.D.K aka "Dolphin Dreams"
});