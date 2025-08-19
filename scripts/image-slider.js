$(document).ready(function() {
    //initialize the image slider
    let currentIndex = 0;
    const nextBtn = $(".next");
    const prevBtn = $(".prev");

    const slider = $("#image-slider");
    const slidesContainer = slider.find(".slides");
    const slides = slider.find(".slide");
    const slideCount = slides.length;

    const fadeEffect = slider.hasClass("fade");


    nextBtn.click(function(e) {
        e.preventDefault();
        let nextIndex = currentIndex + 1;
        //prevent the slider from going off the screen
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }

        goToSlide(nextIndex);

    })
    prevBtn.click(function(e) {
        e.preventDefault();
        let prevIndex = currentIndex - 1;
        //prevent the slider from going off the screen
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        goToSlide(prevIndex);
    })

    function goToSlide(index) {
        slides.removeClass("active").eq(index).addClass("active");
        updatePagination(index);
        currentIndex = index;
        if(!fadeEffect) {
            slidesContainer.animate({
                marginLeft: `${-currentIndex * 100}%`
            })
        }
    }

    function updatePagination(index) {
        let paginationHtml = '';
        for(let i = 0; i < slideCount; i++) {
            paginationHtml += `<span class="${i === index ? 'active' : ''}">${i + 1}</span>`;  
        }

        $(".pagination").html(paginationHtml);
    }

    $(document).on("click", ".pagination span", function() {
        const index = $(this).index();
        goToSlide(index);
    });

    //initialize the first slide
    goToSlide(0);

})