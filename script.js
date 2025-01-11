function initializeNavbarInteractions() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const submenuLinks = navLinks.querySelectorAll('.submenu');

    let startX;

    // Toggle the visibility of the nav menu
    function toggleMenu() {
        const isMenuOpen = navLinks.classList.toggle('show');
        hamburger.classList.toggle('hamburger-translate', isMenuOpen);
    }

    hamburger.addEventListener('click', toggleMenu);

    // Swipe functionality for touch devices
    navLinks.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    navLinks.addEventListener('touchmove', (e) => {
        const diffX = e.touches[0].clientX - startX;

        if (diffX > 50) { // Swipe right to open
            navLinks.classList.add('show');
            hamburger.classList.add('hamburger-translate');
        } else if (diffX < -50) { // Swipe left to close
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate');
        }
    });

    // Handle dropdown toggle and state
    dropdownToggles.forEach((toggle) => {
        const dropdownId = toggle.getAttribute('data-dropdown');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();

            const parentLi = toggle.parentElement;
            const dropdown = parentLi.querySelector('.dropdown');
            const isActive = parentLi.classList.toggle('active');

            dropdown.style.display = isActive ? 'block' : 'none';
            localStorage.setItem(dropdownId, isActive);
        });

        // Restore dropdown state
        if (localStorage.getItem(dropdownId) === 'true') {
            const dropdown = document.getElementById(dropdownId);
            const parentLi = toggle.parentElement;

            dropdown.style.display = 'block';
            parentLi.classList.add('active');
        }
    });

    // Normalize URLs for comparison
    function normalizeUrl(url) {
        return url.replace(/\/$/, '');
    }

    // Highlight the current page link and its main page
    const currentLocation = normalizeUrl(window.location.href);
    submenuLinks.forEach((link) => {
        const linkUrl = normalizeUrl(link.href);

        // Highlight if the current URL starts with the link URL
        if (currentLocation.startsWith(linkUrl)) {
            link.classList.add('active');
            const parentLi = link.closest('.dropdown');
            if (parentLi) {
                parentLi.style.display = 'block';
                parentLi.parentElement.classList.add('active');
            }
        } else {
            link.classList.remove('active');
        }
    });

    // Close menu on submenu link click
    submenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate');
        });
    });

    // Reset menu and dropdowns on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate');

            dropdownToggles.forEach((toggle) => {
                const parentLi = toggle.parentElement;
                const dropdown = parentLi.querySelector('.dropdown');
                dropdown.style.display = 'none';
                parentLi.classList.remove('active');

                const dropdownId = toggle.getAttribute('data-dropdown');
                localStorage.removeItem(dropdownId);
            });
        }
    });
}

// Initialize the navbar interactions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeNavbarInteractions);
