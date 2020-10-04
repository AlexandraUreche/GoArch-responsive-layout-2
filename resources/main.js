'use strict';

const seeMobileWrapperBtn=document.getElementById("seeMobileWrapperBtn");
const closeMobileMenuBtn=document.getElementById("closeMobileMenuBtn");
seeMobileWrapperBtn.addEventListener('click', function(){
    if(MobileWrapper.classList.contains('hidden')) { 
        MobileWrapper.classList.remove('hidden');
        mainContent.style.cssText="display:none;";
        document.body.style.height=window.innerHeight+"px";

    }
});
closeMobileMenuBtn.addEventListener('click', function(){
    MobileWrapper.classList.add('hidden');
    mainContent.style.cssText="display:block;";
});