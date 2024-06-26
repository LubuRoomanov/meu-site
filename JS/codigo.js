window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const section = document.getElementById('fundo');
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > sectionHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});