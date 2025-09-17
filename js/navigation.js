document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuToggle = document.querySelector('.s-header__menu-toggle');
    const siteBody = document.querySelector('body');
    const headerHeight = document.querySelector('.s-header').offsetHeight;

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            if (siteBody.classList.contains('menu-is-open')) {
                siteBody.classList.remove('menu-is-open');
                menuToggle.classList.remove('is-clicked');
            }

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Wait for menu to close, then scroll
            setTimeout(() => {
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });
});