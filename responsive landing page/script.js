document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ffcc00';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'white';
        });
    });
});
