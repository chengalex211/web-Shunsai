let lastScrollPosition = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > lastScrollPosition) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            lastScrollPosition = currentScrollPosition;
        })
document.querySelector('.down-arrow').addEventListener('click', function (e) {
    e.preventDefault(); 


    document.querySelector('#menu-slide').scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});