document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    let startX;

    // Calculate the translation position (50px from the right edge)
    const translateX = `${window.innerWidth - 50}px`; // Move to 50px from the right edge

    // Toggle the visibility of the nav menu
    function toggleMenu() {
        const isMenuOpen = navLinks.classList.toggle('show');
        hamburger.classList.toggle('hamburger-translate', isMenuOpen); // Move button based on menu state
    }

    hamburger.addEventListener('click', toggleMenu);

    // Swipe functionality to open/close sidebar
    navLinks.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    navLinks.addEventListener('touchmove', function (e) {
        const moveX = e.touches[0].clientX;
        const diffX = moveX - startX;

        if (diffX > 50) { // Swipe right threshold
            navLinks.classList.add('show');
            hamburger.classList.add('hamburger-translate'); // Move button
        } else if (diffX < -50) { // Swipe left threshold
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate'); // Move button back
        }
    });

    // Toggle dropdowns when clicked
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        const dropdownId = toggle.getAttribute('data-dropdown');
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            const parentLi = this.parentElement;
            const dropdown = parentLi.querySelector('.dropdown');

            // Toggle the current dropdown
            const isActive = parentLi.classList.contains('active');
            dropdown.style.display = isActive ? 'none' : 'block';
            parentLi.classList.toggle('active', !isActive);

            // Save state to localStorage
            localStorage.setItem(dropdownId, !isActive);
        });

        // Restore dropdown state
        const isOpen = localStorage.getItem(dropdownId) === 'true';
        if (isOpen) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.style.display = 'block';
            toggle.parentElement.classList.add('active');
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate'); // Move button back

            dropdownToggles.forEach(toggle => {
                const parentLi = toggle.parentElement;
                const dropdown = parentLi.querySelector('.dropdown');
                dropdown.style.display = 'none';
                parentLi.classList.remove('active');

                const dropdownId = toggle.getAttribute('data-dropdown');
                localStorage.removeItem(dropdownId);
            });
        }
    });

    // Highlight the current link
    const currentLocation = window.location.href;
    const links = navLinks.querySelectorAll(".submenu");
    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active"); // Add an 'active' class to the clicked link
        }
    });

    // Check localStorage for the active link
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        const activeElement = navLinks.querySelector(`.submenu[href="${activeLink}"]`);
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }

    // Add click event listener to update active link
    navLinks.addEventListener('click', function (event) {
        // Check if a submenu link was clicked
        if (event.target.classList.contains('submenu')) {
            // Remove 'active' class from all submenu links
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            event.target.classList.add('active');

            // Save the clicked link's href to localStorage
            localStorage.setItem('activeLink', event.target.href);
        }
    });

    // Close dropdowns on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('hamburger-translate'); // Move button back

            dropdownToggles.forEach(toggle => {
                const parentLi = toggle.parentElement;
                const dropdown = parentLi.querySelector('.dropdown');
                dropdown.style.display = 'none';
                parentLi.classList.remove('active');

                const dropdownId = toggle.getAttribute('data-dropdown');
                localStorage.removeItem(dropdownId);
            });
        }
    });
});

