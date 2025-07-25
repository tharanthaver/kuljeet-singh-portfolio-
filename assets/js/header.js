/*==================== HEADER FUNCTIONALITY ====================*/

// When the user scrolls down, add a shadow and reduce size of header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.l-header');
    const scrollY = window.pageYOffset;
    
    // Add shadow and reduce size when scrolling down
    if(scrollY >= 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Active link highlighting based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        // Find the current active section
        let currentSection = '';
        
        // Get header height to use as part of the offset calculation
        const headerHeight = document.querySelector('.l-header').offsetHeight;
        // Add extra padding to match the scroll offset used in navigation
        const scrollOffset = headerHeight + 20;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - scrollOffset;
            const sectionId = section.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        // Update active link only if we found a current section
        if (currentSection) {
            // First remove active class from all links
            navLinks.forEach(link => link.classList.remove('active-link'));
            
            // Then add active class to the current section's link
            const activeLink = document.querySelector('.nav__link[href*="#' + currentSection + '"]');
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    }
    
    // Call scrollActive on page load to set initial active link
    scrollActive();
    
    // Add scroll event listener with throttling for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollActive();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show');
        });
    });
    
    // Download CV button functionality removed as requested
    /*
    const addDownloadButton = () => {
        const navList = document.querySelector('.nav__list');
        const downloadBtn = document.createElement('a');
        downloadBtn.href = '#'; // Update with actual CV link
        downloadBtn.className = 'nav__download-btn';
        downloadBtn.innerHTML = 'Download CV <ion-icon name="download-outline"></ion-icon>';
        
        // Add the button after the nav list
        navList.parentNode.appendChild(downloadBtn);
        
        // Add click event to download button
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Implement CV download functionality here
            alert('CV download functionality will be implemented here');
        });
    };
    
    // Call the function to add the download button
    addDownloadButton();
    */
});
