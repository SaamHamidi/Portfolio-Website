function initializeNavbarInteractions() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

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

    // Highlight only the current page link
    const currentLocation = normalizeUrl(window.location.href);
    const links = navLinks.querySelectorAll('.submenu');

    links.forEach((link) => {
        if (normalizeUrl(link.href) === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update active link on click
    navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('submenu')) {
            links.forEach((link) => link.classList.remove('active'));
            e.target.classList.add('active');
            localStorage.setItem('activeLink', normalizeUrl(e.target.href));
        }
    });

    // Close menu and reset dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
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