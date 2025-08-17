$(document).ready(function () {
    $(".dropdown").click(function() {
        $(this).toggleClass("active");
    })

    $(".sub-dropdown").click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("active");
    })
})