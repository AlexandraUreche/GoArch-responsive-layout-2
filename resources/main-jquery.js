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
        <div class="title_and_favorite"> 
            <div class="first_title_image"><span>${pictureObj.description} </span><span>${pictureObj.place}</span></div>
            <div class="favorites-images"></div>
            </div>
            <div class="second_title_image">${pictureObj.architecturalDesign}</div>
        </div>
        `;
    };
    const seeMoreProjectsBtn = $('.more_projects');
    for (let i = 0; i < picturesArr.length; i++) {
        // nu ai nevoie de if-ul asta aici, asta inseamna partea asta de for: i < picturesArr.length
        if (i < 6) {
            let pictureObj = picturesArr[i],
                pictureHMTL = getpropertyHTML(pictureObj);
            galleryWrapper.append(pictureHMTL);
        }
    }
    seeMoreProjectsBtn.click(function () {
        // pornesti de la 6 cu indexul si mergi pana la 5 aici? nu inteleg foarte bine
        for (let i = 6; i < picturesArr.length; i++) {
            let pictureObj = picturesArr[i],
                pictureHMTL = getpropertyHTML(pictureObj);
            galleryWrapper.append(pictureHMTL);
        }
    });


    // ai nevoie de event delegation aici pentru ca ai cod generat dinamic, iar la momentul in care DOM este incarcat prima data in browser, fisierele js inca ruleaza si risti sa nu ai HTML-ul generat ceea ce de fapt se si intampla
    // din cauza aceeasta este ok sa te legi de un element ce deja exista in pagina inca de cand incarci pagina, .gallery-wrapper de exemplu
    galleryWrapper.delegate('.favorites-images', 'click', function() {
    // $('.favorites-images').click(function () {
        console.log('click');
        const id = $(this).parents('.image-wrapper').data('id');
        $(this).addClass('selected');
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        console.log('click');
    });
});