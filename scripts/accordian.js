$(document).ready(function(){
    $('.accordion-toggle').click(function(){
        // Get attribute value from the clicked button
        var dataToggleId = $(this).attr('data-accordion-toggle');

        // Remove active class fro mall elements which don't have the selected dataId
        $(`.accordion-toggle[data-accordion-toggle!=${dataToggleId}], .accordion-tab[data-accordion-tab!=${dataToggleId}]`).removeClass('active');

        // Add active class to the elements with matching dataId
        $(`.accordion-toggle[data-accordion-toggle=${dataToggleId}], .accordion-tab[data-accordion-tab=${dataToggleId}]`).toggleClass('active');

    })
})
