/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
// Commented out to prevent background color issues during animation
// gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
// gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
// gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

// Register ScrollTrigger plugin if it exists
if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Generic section title animation function
    const animateSectionTitle = (sectionClass) => {
        gsap.from(`${sectionClass} .section-title`, {
            opacity: 0,
            y: -40,
            scale: 0.9,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: `${sectionClass} .section-title`,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        
        // Animate the decorative lines
        gsap.from(`${sectionClass} .section-title::after, ${sectionClass} .section-title::before`, {
            width: 0,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: `${sectionClass} .section-title`,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    };
    
    // ABOUT SECTION ANIMATIONS
    animateSectionTitle('.about');
    
    // Container animation
    gsap.from('.about__container', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.about__container',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Image box animation with 3D effect
    gsap.from('.about__img', {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.about__img-box',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Social links animation
    gsap.from('.about__social-link', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.about__social-box',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Role badge bounce in
    gsap.from('.about__role-badge', {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: '.about__content-box',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // Tabs slide in
    gsap.from('.about__tab', {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.7,
        delay: 0.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.about__tabs',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Text paragraphs with staggered animation
    gsap.from('.about__text', {
        opacity: 0, 
        y: 25, 
        duration: 0.8,
        stagger: 0.2, 
        scrollTrigger: {
            trigger: '.about__content-box',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // Interest list items animation
    gsap.from('.about__interest-list li', {
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.about__interest-list',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Expertise items appear with stagger
    gsap.from('.about__expertise-item', {
        opacity: 0,
        y: 30,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.about__expertise-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Stats counter animation
    const statsNumberElements = document.querySelectorAll('.about__stat-number');
    statsNumberElements.forEach(element => {
        const finalValue = parseInt(element.textContent);
        gsap.fromTo(element, 
            { textContent: 0 }, 
            { 
                textContent: finalValue,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: '.about__stats',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                onUpdate: function() {
                    element.textContent = Math.ceil(this.targets()[0].textContent) + (element.textContent.includes('+') ? '+' : '');
                }
            }
        );
    });
    
    // Stats items zoom in
    gsap.from('.about__stat-item', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.about__stats',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // CTA button animation
    gsap.from('.about__cta-button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.5,
        scrollTrigger: {
            trigger: '.about__content-box',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // EMPLOYMENT SECTION ANIMATIONS
    animateSectionTitle('.employment');
    
    // Employment intro animation
    gsap.from('.employment__intro', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '.employment__intro',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // SKILLS SECTION ANIMATIONS
    animateSectionTitle('.skills');
    
    // Skills intro animation with text reveal
    gsap.from('.skills__intro p', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
            trigger: '.skills__intro',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Skills cards staggered animation
    gsap.from('.skills__card', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.skills__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Skills icon animation
    gsap.from('.skills__icon', {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.3,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
            trigger: '.skills__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Skills title animation
    gsap.from('.skills__card-title', {
        opacity: 0,
        x: -20,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.skills__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Progress bar animation
    gsap.fromTo('.skills__progress-bar', 
        { width: '0%' },
        { 
            width: '100%',
            duration: 1.5,
            stagger: 0.12,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.skills__container',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        }
    );
    
    // Percentage counter animation
    const percentageElements = document.querySelectorAll('.skills__percentage');
    percentageElements.forEach(element => {
        const finalValue = 100;
        gsap.fromTo(element, 
            { textContent: '0' }, 
            { 
                textContent: finalValue,
                duration: 2,
                delay: 0.8,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: '.skills__container',
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                },
                onUpdate: function() {
                    element.textContent = Math.ceil(this.targets()[0].textContent);
                }
            }
        );
    });
    
    // Add 3D tilt effect to skills cards
    document.querySelectorAll('.skills__card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / (rect.width / 2) * 8;
            const moveY = (y - centerY) / (rect.height / 2) * 8;
            
            gsap.to(card, {
                rotationY: moveX,
                rotationX: -moveY,
                transformPerspective: 1000,
                duration: 0.5,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
    
    // Timeline animation with glow effect
    gsap.from('.employment__timeline::before', {
        height: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.employment__timeline',
            start: 'top 70%',
            end: 'bottom 20%',
            scrub: 1
        }
    });
    
    gsap.to('.employment__timeline::before', {
        boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.4), 0 0 10px 2px rgba(255, 107, 107, 0.6)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scrollTrigger: {
            trigger: '.employment__timeline',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    // Timeline nodes animation
    gsap.to('.employment__card::after', {
        boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.7), 0 0 15px 4px rgba(255, 107, 107, 0.5)',
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.employment__timeline',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    // Cards reveal animation
    gsap.from('.employment__card', {
        opacity: 0,
        scale: 0.8,
        y: 80,
        rotationX: 15,
        rotationY: -15,
        transformOrigin: '50% 50%',
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.employment__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Card connectors animation
    gsap.from('.employment__card::before', {
        width: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
            trigger: '.employment__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Add hover effect on cards
    document.querySelectorAll('.employment__card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.querySelector('.employment__card-inner').classList.contains('flipped')) {
                gsap.to(card.querySelector('.employment__card-inner'), {
                    rotationY: 15,
                    scale: 1.05,
                    boxShadow: '0 25px 35px rgba(0,0,0,0.5)',
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.querySelector('.employment__card-inner').classList.contains('flipped')) {
                gsap.to(card.querySelector('.employment__card-inner'), {
                    rotationY: 0,
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // Card content animations
    gsap.from('.employment__title, .employment__period, .employment__institution, .employment__location, .employment__responsibilities', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.employment__cards-container',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // Icons pulse animation
    gsap.to('.employment__icon', {
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(255, 107, 107, 0.6)',
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.employment__cards-container',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // Employment cards staggered animation
    gsap.from('.employment__card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.employment__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Employment card elements staggered animation
    gsap.from('.employment__period, .employment__title, .employment__institution, .employment__location, .employment__description, .employment__profile-link', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.employment__container',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // COMPETITIVE EXAMINATIONS SECTION ANIMATIONS
    gsap.from('.exams__header', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '.exams',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.exams__subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: '.exams',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.exams__table', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.exams__subtitle',
            start: 'bottom 85%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.exams__header-row', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.7,
        scrollTrigger: {
            trigger: '.exams__table',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.exams__row', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.9,
        scrollTrigger: {
            trigger: '.exams__table',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // PROJECTS SECTION ANIMATIONS
    animateSectionTitle('.projects');
    
    // Projects grid animation
    gsap.from('.project-grid', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Project card staggered animation
    gsap.from('.project-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // TIMELINE SECTION ANIMATIONS
    animateSectionTitle('.timeline');
    
    // Timeline container animation
    gsap.from('.timeline__container', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.timeline__container',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Timeline items staggered animation
    gsap.from('.timeline__item', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.timeline__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Timeline content animation
    gsap.from('.timeline__content', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.timeline__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // CONTACT SECTION ANIMATIONS
    animateSectionTitle('.contact');
    
    // Contact container animation
    gsap.from('.contact__container', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact__container',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Contact form animation
    gsap.from('.contact__form', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact__form',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Contact input fields staggered animation
    gsap.from('.contact__input', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact__form',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Contact button animation
    gsap.from('.contact__button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.contact__form',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // Contact info animation
    gsap.from('.contact__info', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact__info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Contact info items staggered animation
    gsap.from('.contact__info-item', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact__info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Remove active class from all links
                    navLinks.forEach(navLink => navLink.classList.remove('active-link'));
                    
                    // Add active class to clicked link
                    this.classList.add('active-link');
                    
                    // Calculate proper offset to ensure section title is fully visible
                    const headerHeight = document.querySelector('.l-header').offsetHeight;
                    // Add extra padding (20px) to ensure the title is not right at the edge of the header
                    const scrollOffset = headerHeight + 20;
                    
                    // Scroll to the target section with calculated offset
                    window.scrollTo({
                        top: targetSection.offsetTop - scrollOffset,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without scrolling
                    history.pushState(null, null, href);
                }
            }
        });
    });
    
    // Handle initial page load with hash in URL
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        const targetLink = document.querySelector(`.nav__link[href="${window.location.hash}"]`);
        
        if (targetSection && targetLink) {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active-link'));
            
            // Add active class to target link
            targetLink.classList.add('active-link');
            
            // Scroll to section after a short delay to ensure page is fully loaded
            setTimeout(() => {
                // Calculate proper offset to ensure section title is fully visible
                const headerHeight = document.querySelector('.l-header').offsetHeight;
                // Add extra padding (20px) to ensure the title is not right at the edge of the header
                const scrollOffset = headerHeight + 20;
                
                window.scrollTo({
                    top: targetSection.offsetTop - scrollOffset,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
});

/*==================== RESEARCH TABS ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const researchTabs = document.querySelectorAll('.research__tab');
    const researchData = document.querySelectorAll('.research__data');

    function changeResearchTab(e) {
        const target = document.querySelector(this.dataset.target);
        
        // Remove active class from all tabs
        researchTabs.forEach(tab => tab.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Remove active class from all content
        researchData.forEach(data => data.classList.remove('active'));
        // Add active class to target content
        target.classList.add('active');
    }

    researchTabs.forEach(tab => {
        tab.addEventListener('click', changeResearchTab);
    });
});

/*==================== PUBLICATIONS FILTER ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.publications__filter');
    const publicationItems = document.querySelectorAll('.publications__item');
    
    function filterPublications(e) {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all filters
        filters.forEach(f => f.classList.remove('active'));
        // Add active class to clicked filter
        this.classList.add('active');
        
        publicationItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 100);
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    }
    
    filters.forEach(filter => {
        filter.addEventListener('click', filterPublications);
    });
});

/*==================== MOUSE TRAIL EFFECT ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Mouse trail effect
  const numberOfTrails = 10;
  const trails = [];
  
  // Create trails
  for (let i = 0; i < numberOfTrails; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = 1 - (i / numberOfTrails);
    trail.style.width = `${8 - (i * 0.5)}px`;
    trail.style.height = `${8 - (i * 0.5)}px`;
    document.body.appendChild(trail);
    trails.push({
      element: trail,
      x: 0,
      y: 0
    });
  }

  // Mouse move event
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Animation loop for trail effect
  function animateTrails() {
    trails.forEach((trail, index) => {
      // Add easing to make following smoother
      trail.x += (mouseX - trail.x) * (0.2 - index * 0.015);
      trail.y += (mouseY - trail.y) * (0.2 - index * 0.015);

      trail.element.style.transform = `translate(${trail.x}px, ${trail.y}px)`;
    });
    
    requestAnimationFrame(animateTrails);
  }
  
  animateTrails();
  
  // Add floating particles to skills section
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'skills__particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: rgba(231, 76, 60, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        pointer-events: none;
        z-index: 0;
      `;
      skillsSection.appendChild(particle);
      
      gsap.to(particle, {
        y: -Math.random() * 150 - 50,
        x: Math.random() * 100 - 50,
        opacity: 0,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        delay: Math.random() * 5,
        ease: 'power1.inOut',
        yoyo: true
      });
    }
  }

  /*==================== ABOUT SECTION TABS ====================*/
  const aboutTabs = document.querySelectorAll('.about__tab');
  const aboutContents = document.querySelectorAll('.about__tab-content');
  
  function changeAboutTab(e) {
    // Prevent default behavior
    e.preventDefault();
    
    // Get target content ID
    const target = this.getAttribute('data-target');
    const targetContent = document.getElementById(target);
    
    // If target doesn't exist or is already active, return early
    if (!targetContent || this.classList.contains('active')) return;
    
    // Remove active class from all tabs (optimized)
    for (let tab of aboutTabs) {
      tab.classList.remove('active');
    }
    
    // Add active class to clicked tab immediately
    this.classList.add('active');
    
    // Hide all content sections (optimized)
    for (let content of aboutContents) {
      content.classList.remove('active');
      content.style.display = 'none';
    }
    
    // Show the selected content immediately
    targetContent.classList.add('active');
    targetContent.style.display = 'block';
  }
  
  // Add event listeners to tabs with passive: false for better performance
  aboutTabs.forEach(tab => {
    tab.addEventListener('click', changeAboutTab, { passive: false });
  });
  
  /*==================== SECTION VISIBILITY ====================*/
  const sections = document.querySelectorAll('.section');
  
  // Intersection Observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate skill bars when skills section becomes visible
        if (entry.target.id === 'skills') {
          const progressBars = entry.target.querySelectorAll('.skills__progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = '100%';
              
              // Add pulsing effect to bars after they're filled
              setTimeout(() => {
                gsap.to(bar, {
                  opacity: 0.8,
                  duration: 1,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut'
                });
              }, 1500);
            }, index * 150);
          });
          
          // Count up percentage numbers
          const percentages = entry.target.querySelectorAll('.skills__percentage');
          percentages.forEach((percentage, index) => {
            setTimeout(() => {
              let startValue = 0;
              const endValue = 100;
              const duration = 1500;
              const counter = setInterval(() => {
                startValue += 1;
                percentage.textContent = startValue;
                if (startValue === endValue) {
                  clearInterval(counter);
                }
              }, duration / endValue);
            }, index * 150);
          });
          
          // Add glow effect to skill icons
          const skillIcons = entry.target.querySelectorAll('.skills__icon');
          skillIcons.forEach((icon, index) => {
            setTimeout(() => {
              gsap.to(icon, {
                boxShadow: '0 0 15px 5px rgba(231, 76, 60, 0.7)',
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              });
            }, index * 200);
          });
        }
      }
    });
  }, {
    threshold: 0.15
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  /*==================== ACTIVE LINK HIGHLIGHT ====================*/
  /* Removed to avoid conflict with header.js */
  
  const highlightNavLinks = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', highlightNavLinks);
});

// GSAP animations for employment cards and timeline
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
        // Timeline animation
        gsap.from(".employment__timeline::before", {
            scrollTrigger: {
                trigger: ".employment__timeline",
                start: "top 70%",
                end: "bottom 20%",
                scrub: true
            },
            height: 0,
            ease: "power2.out"
        });
        
        gsap.from(".employment__timeline::after", {
            scrollTrigger: {
                trigger: ".employment__timeline",
                start: "top 70%",
                end: "bottom 20%",
                scrub: true
            },
            height: 0,
            ease: "power2.out",
            delay: 0.2
        });
        
        // Staggered card animation
        gsap.from(".employment__card:nth-child(odd)", {
            scrollTrigger: {
                trigger: ".employment__timeline",
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1
            },
            x: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out"
        });
        
        gsap.from(".employment__card:nth-child(even)", {
            scrollTrigger: {
                trigger: ".employment__timeline",
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1
            },
            x: 150,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out"
        });
    },
    "all": function() {
        // Timeline nodes pulsing effect
        gsap.to(".employment__card::after", {
            boxShadow: "0 0 20px 5px rgba(255,255,255,0.7), 0 0 10px 3px rgba(255,107,107,0.5)",
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
            stagger: 0.5
        });
        
        // Timeline connectors glow effect
        gsap.to(".employment__card::before", {
            boxShadow: "0 0 15px 2px rgba(255,255,255,0.4)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.5,
            delay: 0.5
        });
    }
});

// Employment Cards Animation
document.addEventListener('DOMContentLoaded', () => {
    const employmentCards = document.querySelectorAll('.employment__card');
    
    employmentCards.forEach(card => {
        // Add click event for flipping
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('flipped')) {
                gsap.to(card.querySelector('.employment__card-inner'), {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('flipped')) {
                gsap.to(card.querySelector('.employment__card-inner'), {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Add staggered animation for cards on scroll
    gsap.from('.employment__card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.employment__container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Add floating animation to icons
    gsap.to('.employment__icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
    });

    // Add glow effect to badges
    gsap.to('.employment__badge', {
        boxShadow: '0 0 20px rgba(212, 167, 106, 0.5)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
    });
});

// Function to get the current visitor count from localStorage
function getVisitorCount() {
    return parseInt(localStorage.getItem('visitorCount')) || 0;
}

// Function to increment the visitor count
function incrementVisitorCount() {
    let count = getVisitorCount();
    count += 1;
    localStorage.setItem('visitorCount', count);
    return count;
}

// Initialize the visitor count
const currentCount = incrementVisitorCount();

// Animate count up for statsvis section
function animateCount(id, endValue, duration = 3000) {
    const el = document.getElementById(id);
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * endValue);
        el.textContent = value.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

// Initialize the statsvis count animation
animateCount("statsvisCount", currentCount);

// Hover sound effect for statsvis section
const hoverTargets = document.querySelectorAll('.statsvis__card, .statsvis__map-container');
const sound = document.getElementById("hoverSound");

hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
    });
});

// Add JavaScript code to toggle the 'flipped' class on the '.flip-container' when clicked, enabling flip effect on mobile devices.
document.addEventListener('DOMContentLoaded', function () {
    const flipContainer = document.querySelector('.flip-container');

    if (flipContainer) {
        // Always add click/touch event for mobile compatibility
        // We'll use CSS media queries to handle desktop hover vs mobile click
        
        // Add click event for toggle functionality
        flipContainer.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('flipped');
            console.log('Profile picture clicked, flipped class:', this.classList.contains('flipped'));
        });
        
        // Add touch event for better mobile support
        flipContainer.addEventListener('touchend', function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('flipped');
            console.log('Profile picture touched, flipped class:', this.classList.contains('flipped'));
        });
        
        // Add visual indicators that the image is interactive
        flipContainer.style.cursor = 'pointer';
        flipContainer.style.userSelect = 'none';
        flipContainer.style.webkitUserSelect = 'none';
        flipContainer.style.webkitTouchCallout = 'none';
        
        // Add accessibility
        flipContainer.setAttribute('role', 'button');
        flipContainer.setAttribute('aria-label', 'Click to flip profile picture');
        flipContainer.setAttribute('tabindex', '0');
        
        // Add keyboard support for accessibility
        flipContainer.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });
    }
});
