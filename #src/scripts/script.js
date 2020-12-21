
headerMenuMobile();

function headerMenuMobile() {
    let burger = document.querySelector('.burger');
    
    burger.addEventListener('click', function () {
        let headerMobile = document.querySelector('.header-mobile');
        
        burger.classList.toggle('burger-active');
        headerMobile.classList.toggle('isActiveMenu');
    });
}













@@include('dynamicAdapt.js')
@@include('testWebP.js')