// Media Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Simple photo gallery navigation
    const photoGallery = document.getElementById('photoGallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (photoGallery && prevBtn && nextBtn) {
        console.log('Gallery elements found');
        
        // Calculate scroll amount based on first item width + gap
        const items = photoGallery.querySelectorAll('.media-photos__item');
        if (items.length === 0) return;
        
        const itemWidth = items[0].offsetWidth;
        const scrollAmount = itemWidth + 24; // 24px is the gap (1.5rem)
        
        // Simple scroll functions
        nextBtn.addEventListener('click', function() {
            console.log('Next button clicked');
            photoGallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', function() {
            console.log('Previous button clicked');
            photoGallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        // Update button visibility
        function updateButtonVisibility() {
            prevBtn.style.opacity = photoGallery.scrollLeft <= 10 ? '0.3' : '1';
            const maxScrollLeft = photoGallery.scrollWidth - photoGallery.clientWidth - 10;
            nextBtn.style.opacity = photoGallery.scrollLeft >= maxScrollLeft ? '0.3' : '1';
        }
        
        // Add event listeners
        photoGallery.addEventListener('scroll', updateButtonVisibility);
        window.addEventListener('resize', updateButtonVisibility);
        
        // Initialize
        updateButtonVisibility();
    }
    
    // GSAP animations
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate newspaper articles
        gsap.from('.newspaper-articles__card', {
            scrollTrigger: {
                trigger: '.newspaper-articles__content',
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        });
        
        // Animate photo items
        gsap.from('.media-photos__item', {
            scrollTrigger: {
                trigger: '.media-photos__grid',
                start: 'top 80%'
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.5)'
        });
    }
});
