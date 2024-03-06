const $header = document.querySelector('#header-box');
const $logo = document.querySelector('.logo');
const $imgLogo = document.querySelector('.logo img');
const $navBar = document.querySelectorAll('.nav-item');
const $ghost = document.querySelector('.ghost')




window.addEventListener('scroll', toggleHeader, false);


function toggleHeader() {
    const scrollEvent = window.scrollY;
    if(scrollEvent > 0 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $imgLogo.setAttribute('src', '../public/img/logomarca_sensui2.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $ghost.classList.remove('max-header');
        $ghost.classList.add('min-header');
        $navBar.forEach(item => {
            item.classList.remove('max-navbar')
            item.classList.add('min-navbar')
        });
        
    } else if(scrollEvent <= 100 && $header.classList.contains('min-header')) {
        console.log('DIMINUI')
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
        $imgLogo.setAttribute('src', '../public/img/logomarca_sensui1.png')
        $imgLogo.style.transition('all ease 0.5s')
        $imgLogo.style.heigth('100%')
        $logo.classList.remove('min-logo');
        $logo.classList.add('max-logo');
        $ghost.classList.remove('min-header');
        $ghost.classList.add('max-header');
        $navBar.forEach(item => {
            item.classList.remove('min-navbar')
            item.classList.add('max-navbar')
        });
    }
}



























