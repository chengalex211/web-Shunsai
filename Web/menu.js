document.querySelector('.explore-menu').addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetSection = document.querySelector('#menu-slide');
    const offset = targetSection.getBoundingClientRect().top + window.scrollY; 
    const additionalOffset = 170; 

    window.scrollTo({
        top: offset + additionalOffset,
        behavior: 'smooth' 
    });
});

document.querySelector('.explore-gallery').addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetSection = document.querySelector('#image-gallery'); 
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY; 
    const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0; 
    const fineTuneOffset = 100; 

    window.scrollTo({
        top: targetPosition - navbarHeight - fineTuneOffset,
        behavior: 'smooth', 
    });
});