$(function () {
    let favoritesAdded = [];
    const seeMobileWrapperBtn = $('.menu-mobile .fas'),
        closeMobileMenuBtn = $("#closeMobileMenuBtn"),
        favoritesContentWrapper = $('.favorites-content-wrapper'),
        removeFavoritesBtn = $('#removeFavoritesBtn'),
        favoritesPictures = $('.favorites-pictures'),
        galleryWrapper = $('.container-fluid .row');
    seeMobileWrapperBtn.click(function () {
        console.log('click');
        $('.mobile-menu-wrapper').removeClass('hidden');
        $('#mainContent').addClass('hidden');
    });
    closeMobileMenuBtn.click(function () {
        $('.mobile-menu-wrapper').addClass('hidden');
        $('#mainContent').removeClass('hidden');
    });

    
   getfavoritemenuHTML = function () {
        return `<a class="favorites-icon-wrapper">
                   <img src="assets/icon-heart-full-white.png">
                   <div class="favorites-number">
                   </div></a>`;
    };
    
   let favoritemenuimageHMTL = getfavoritemenuHTML();
   console.log(favoritemenuimageHMTL);
    $('.menu-desktop').append(favoritemenuimageHMTL);
    $('.menu-mobile').append(favoritemenuimageHMTL);
    let favoritesTotal = $('.favorites-number'),
    favoritesHeaderIcon = $('.favorites-icon-wrapper');
   


    getpropertyHTML = function (pictureObj) {
        return `<div class="col col-4"> 
        <div class="image-wrapper" data-id=${pictureObj.id} style="background-image: url(assets/${pictureObj.imgUrl})">
        <div class="title_and_favorite"> 
            <div class="first_title_image"><span>${pictureObj.description} </span><span>${pictureObj.place}</span></div>
            <div class="favorites-images"></div>
            </div>
            <div class="second_title_image">${pictureObj.architecturalDesign}</div>
        </div>
        </div>
        `;
    };
    const seeMoreProjectsBtn = $('.more_projects');
    for (let i = 0; i < picturesArr.length; i++) {
        let pictureObj = picturesArr[i],
            pictureHMTL = getpropertyHTML(pictureObj);
        galleryWrapper.append(pictureHMTL);

    }
    seeMoreProjectsBtn.click(function () {
        for (let i = 0; i < extraPicturesArr.length; i++) {
            let pictureObj = extraPicturesArr[i],
                pictureHMTL = getpropertyHTML(pictureObj);

            galleryWrapper.append(pictureHMTL);
        }
    });

    console.log(favoritesAdded.length);
    galleryWrapper.delegate('.favorites-images', 'click', function () {
        const id = $(this).parents('.image-wrapper').data('id');
        $(this).toggleClass('selected');
        $('.favorites-icon-wrapper img').attr('src', 'assets/icon-heart-full.png')

        if (jQuery.inArray(id, favoritesAdded) === -1) {
            favoritesAdded.push(id);
        } else {
            favoritesAdded.splice(favoritesAdded.indexOf(id), 1);
        }

        if (favoritesAdded.length > 0) {
            favoritesTotal.text(favoritesAdded.length);
            favoritesTotal.show();

        } else {
            favoritesTotal.hide();
            $('.favorites-icon-wrapper img').attr('src', 'assets/icon-heart-full-white.png');
        }
    });
    favoritesHeaderIcon.click(function () {
        console.log('click')
        if (favoritesAdded.length > 0) {
            const galleryArr = $.merge(picturesArr, extraPicturesArr);
            $('.container').hide(function () {
                favoritesAdded.forEach(function (item) {
                    for (let i = 0; i < galleryArr.length; i++) {
                        let pictureObj = galleryArr[i];

                        if (item === pictureObj.id) {
                            let pictureHMTL = getpropertyHTML(pictureObj);
                            favoritesPictures.append(pictureHMTL);
                        }
                    }

                });
                favoritesContentWrapper.show();
                $('footer').hide();
            });
        }
    });
    removeFavoritesBtn.click(function () {
        favoritesAdded = [];
        favoritesTotal.hide();
        $('.favorites-icon-wrapper img').attr('src', 'assets/icon-heart-full-white.png');
        favoritesPictures.text('Your pictures have been removed.');
        favoritesPictures.addClass('removed-pictures');

    });

    $('form').on('submit', function (e) {
        e.preventDefault();
    });

});