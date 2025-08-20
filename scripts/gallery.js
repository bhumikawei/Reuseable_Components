$(document).ready(function() {
    const galleryThumbnails = $(".gallery .gallery-thumbnail");
    const galleryWindow = $(".gallery-window");
    const slider = $(".gallery-slider");
    const slidesContainer = slider.find(".gallery-slides");
    let  slides = slider.find(".gallery-img");
    let currentIndex = 0;
    let slideCount = slides.length;

    //Buttons
    const nextBtn = $(".next");
    const prevBtn = $(".prev");
    const closeBtn = $(".close");

    const animateSpeed = 400;

    prevBtn.click(function() {
        let prevIndex = currentIndex - 1;
        if (prevIndex <= 0) prevIndex = slideCount - 1;
        goToSlide(prevIndex);
    });

    nextBtn.click(function() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slideCount) nextIndex = 0;
        goToSlide(nextIndex);
    });

    closeBtn.click(function() {
        slidesContainer.animate({
            paddingTop: 0,
        });
        galleryWindow.fadeOut(animateSpeed);
    });

    galleryWindow.click(function(e) {
        if (e.target !== this) return;

        slidesContainer.animate({
            paddingTop: 0, 
        });
        galleryWindow.fadeOut(animateSpeed);
    });

    galleryThumbnails.click(function() {
        var index = $(this).index();
        galleryWindow.fadeIn(animateSpeed)
            goToSlide(index);
    });

    function goToSlide(index) {
        var alt = slides.eq(index).attr("alt");
        var imgInfo = $(".img-info");
        currentIndex = index;
        imgInfo.html(alt);
        slides.removeClass("active").eq(index).addClass("active");
        var calcPadding = (slides.eq(currentIndex).height() / slider.width()) * 100 + "%";

        slidesContainer.animate({
            paddingTop: calcPadding,
        });
    }

    function generateGallery() {
        galleryThumbnails.each(function() {
            var cloneElement = $(this).clone();
            cloneElement.removeClass("gallery-thumbnail").addClass("gallery-img");
            slidesContainer.append(cloneElement);
        });
        slides = slider.find(".gallery-img");
        slideCount = slides.length;
    }

    generateGallery();
})