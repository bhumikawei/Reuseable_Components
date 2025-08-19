$(document).ready(function() {
    $(".accordion-toggle").click(function() {
        //get attr value from clicked button
        var dataToggleId = $(this).attr("data-accordion-toggle");
        //hide all accordions
        $(`.accordion-toggle[data-accordion-toggle != ${dataToggleId}], .accordion-tab[data-accordion-tab != ${dataToggleId}]`).removeClass("active"); 

        //add active class
        $(`.accordion-toggle[data-accordion-toggle = ${dataToggleId}], .accordion-tab[data-accordion-tab = ${dataToggleId}]`).addClass("active"); 
    })
})