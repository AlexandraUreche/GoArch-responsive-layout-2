$(function () {
    const seeMobileWrapperBtn = $('#seeMobileWrapperBtn');
    const closeMobileMenuBtn = $("#closeMobileMenuBtn");
    seeMobileWrapperBtn.click(function () {
        console.log('click');
        $('.mobile-menu-wrapper').removeClass('hidden');
        $('#mainContent').addClass('hidden');
    });
    closeMobileMenuBtn.click(function () {
        $('.mobile-menu-wrapper').addClass('hidden');
        $('#mainContent').removeClass('hidden');
    });



    const galleryWrapper = $('.gallery-wrapper');
    getpropertyHTML = function (pictureObj) {
        return `<div class="image-gallery">
        <div class="image-wrapper" data-id=${pictureObj.id} style="background-image: url(assets/${pictureObj.imgUrl})">
            <div class="first_title_image"><span>${pictureObj.description} </span><span>${pictureObj.place}</span></div>
            <div class="second_title_image">${pictureObj.architecturalDesign}</div>
        </div>
        `;
    };
    
    for (let i = 0; i < picturesArr.length; i++) {
        let pictureObj = picturesArr[i],
            pictureHMTL = getpropertyHTML(pictureObj);
        galleryWrapper.append(pictureHMTL);
    }

    const seeMoreProjectsBtn = $('.more_projects');
    seeMoreProjectsBtn.click(function () {
            for (let i = 0; i < extraPicturesArr.length; i++) {
                let pictureObj = extraPicturesArr[i],
                    pictureHMTL = getpropertyHTML(pictureObj);
                galleryWrapper.append(pictureHMTL);
            }
        
    });
    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log('click');
    });
});