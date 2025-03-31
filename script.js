import { config } from './config.js';
import gsap from 'gsap';

// DOM elements references
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');
const starsContainer = document.querySelector('.stars-container');
const zodiacSvg = document.querySelector('.zodiac-svg');
const testimonialContainer = document.querySelector('.testimonial-container');
const carouselIndicators = document.querySelector('.carousel-indicators');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Populate configurable elements
document.getElementById('astrologerName').textContent = config.astrologerName;
document.getElementById('yearsExperience').textContent = config.yearsExperience;
document.getElementById('contactEmail').textContent = config.contactEmail;
document.getElementById('contactPhone').textContent = config.contactPhone;
document.getElementById('contactLocation').textContent = config.contactLocation;
document.getElementById('natalChartPrice').textContent = config.natalChartPrice;
document.getElementById('relationshipPrice').textContent = config.relationshipPrice;
document.getElementById('yearlyForecastPrice').textContent = config.yearlyForecastPrice;
document.getElementById('careerGuidancePrice').textContent = config.careerGuidancePrice;
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = menuToggle.classList.contains('active') ? 'hidden' : '';
    
    // Animate the menu toggle bars
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '0.7rem 5%';
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1rem 5%';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Create stars background
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.opacity = Math.random() * 0.8 + 0.2;
        
        // Apply CSS
        star.style.position = 'absolute';
        star.style.backgroundColor = '#fff';
        star.style.borderRadius = '50%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
        
        starsContainer.appendChild(star);
    }
    
    // Add floating rangoli patterns
    createRangoliPatterns();
}

// Create floating rangoli patterns
function createRangoliPatterns() {
    for (let i = 0; i < 6; i++) {
        const rangoli = document.createElement('div');
        rangoli.className = 'rangoli-pattern';
        rangoli.style.position = 'absolute';
        rangoli.style.width = `${Math.random() * 80 + 60}px`;
        rangoli.style.height = rangoli.style.width;
        rangoli.style.left = `${Math.random() * 90 + 5}%`;
        rangoli.style.top = `${Math.random() * 80 + 10}%`;
        rangoli.style.opacity = '0.03';
        rangoli.style.backgroundSize = 'contain';
        rangoli.style.backgroundPosition = 'center';
        rangoli.style.backgroundRepeat = 'no-repeat';
        rangoli.style.zIndex = '-1';
        rangoli.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Choose one of several rangoli patterns
        const patternNum = Math.floor(Math.random() * 4) + 1;
        rangoli.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='${getRangoliPath(patternNum)}' fill='%236b275a'/%3E%3C/svg%3E")`;
        
        // Animate slowly
        rangoli.style.animation = `floatRangoli ${Math.random() * 10 + 20}s infinite alternate ease-in-out`;
        rangoli.style.animationDelay = `${Math.random() * 5}s`;
        
        document.body.appendChild(rangoli);
    }
}

// Get different rangoli paths
function getRangoliPath(num) {
    switch(num) {
        case 1:
            return "M50 5 L95 50 L50 95 L5 50 Z M50 20 L80 50 L50 80 L20 50 Z M50 35 L65 50 L50 65 L35 50 Z";
        case 2:
            return "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z M50,30 A20,20 0 1,0 50,70 A20,20 0 1,0 50,30 Z M20,50 L80,50 M50,20 L50,80";
        case 3:
            return "M50,5 L60,40 L95,50 L60,60 L50,95 L40,60 L5,50 L40,40 Z M50,25 L55,45 L75,50 L55,55 L50,75 L45,55 L25,50 L45,45 Z";
        default:
            return "M10,50 A40,40 0 1,0 90,50 A40,40 0 1,0 10,50 Z M30,50 A20,20 0 1,1 70,50 A20,20 0 1,1 30,50 Z M20,20 L80,80 M20,80 L80,20";
    }
}

// Create zodiac wheel
function createZodiacWheel() {
    const zodiacSigns = [
        { name: 'Aries', symbol: 'M50,10 L55,20 L45,20 Z' },
        { name: 'Taurus', symbol: 'M45,10 C48,5 52,5 55,10 C58,15 52,20 50,15 C48,20 42,15 45,10 Z' },
        { name: 'Gemini', symbol: 'M45,10 L45,20 M55,10 L55,20 M45,15 L55,15' },
        { name: 'Cancer', symbol: 'M50,10 C45,10 40,15 45,20 C50,15 55,20 50,10' },
        { name: 'Leo', symbol: 'M45,10 L55,10 L55,20 L45,20 Z M50,10 L50,20' },
        { name: 'Virgo', symbol: 'M45,15 Q50,10 55,15 M50,15 L50,20' },
        { name: 'Libra', symbol: 'M40,15 L60,15 M50,10 L50,20' },
        { name: 'Scorpio', symbol: 'M40,15 L50,15 L50,10 L50,20 L60,15' },
        { name: 'Sagittarius', symbol: 'M40,10 L60,20 M40,20 L50,10' },
        { name: 'Capricorn', symbol: 'M40,20 C45,5 60,15 55,20' },
        { name: 'Aquarius', symbol: 'M40,12 Q50,20 60,12 M40,18 Q50,10 60,18' },
        { name: 'Pisces', symbol: 'M40,15 Q50,5 60,15 Q50,25 40,15' }
    ];

    // Create wheel sections
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 100 + 80 * Math.cos(angle);
        const y = 100 + 80 * Math.sin(angle);
        
        // Create section line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '100');
        line.setAttribute('y1', '100');
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', '#f2c94c');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', '0.7');
        zodiacSvg.appendChild(line);
        
        // Create zodiac symbol
        const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const symbolX = 100 + 65 * Math.cos(angle);
        const symbolY = 100 + 65 * Math.sin(angle);
        symbol.setAttribute('transform', `translate(${symbolX}, ${symbolY}) rotate(${i * 30}) scale(0.5)`);
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', zodiacSigns[i].symbol);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#f2c94c');
        path.setAttribute('stroke-width', '2');
        
        symbol.appendChild(path);
        zodiacSvg.appendChild(symbol);
    }
    
    // Animate zodiac wheel
    if (config.animateZodiac) {
        gsap.to('.zodiac-svg', {
            rotation: 360,
            duration: config.zodiacRotationSpeed,
            repeat: -1,
            ease: 'linear',
            transformOrigin: '50% 50%'
        });
    }
}

// Create decorative mandala patterns
function createMandalaPatterns() {
    const mandala = document.querySelector('.mandala-svg');
    
    // Create concentric circles
    for (let i = 1; i <= 5; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '100');
        circle.setAttribute('cy', '100');
        circle.setAttribute('r', 80 - i * 10);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#6b275a');
        circle.setAttribute('stroke-width', '0.5');
        circle.setAttribute('opacity', '0.3');
        mandala.appendChild(circle);
    }
    
    // Create radial lines
    for (let i = 0; i < 24; i++) {
        const angle = (i * 15) * (Math.PI / 180);
        const x = 100 + 80 * Math.cos(angle);
        const y = 100 + 80 * Math.sin(angle);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '100');
        line.setAttribute('y1', '100');
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', '#6b275a');
        line.setAttribute('stroke-width', '0.5');
        line.setAttribute('opacity', '0.3');
        mandala.appendChild(line);
    }
    
    // Create decorative patterns
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 100 + 60 * Math.cos(angle);
        const y = 100 + 60 * Math.sin(angle);
        
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
        dot.setAttribute('r', '3');
        dot.setAttribute('fill', '#f2c94c');
        dot.setAttribute('opacity', '0.5');
        mandala.appendChild(dot);
    }
    
    // Animate the mandala
    gsap.to('.mandala-svg', {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%'
    });
}

// Testimonials carousel
function setupTestimonials() {
    let currentIndex = 0;
    
    // Clear existing content
    testimonialContainer.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    // Create single testimonial display
    const testimonialDisplay = document.createElement('div');
    testimonialDisplay.className = 'testimonial-display';
    testimonialContainer.appendChild(testimonialDisplay);
    
    // Create and display first testimonial
    function displayTestimonial(index) {
        testimonialDisplay.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-quote">${config.testimonials[index].quote}</div>
                <div class="testimonial-author">${config.testimonials[index].author}</div>
            </div>
        `;
    }
    
    // Create indicators
    config.testimonials.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (index === 0 ? ' active' : '');
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });
    
    function goToSlide(index) {
        const indicators = document.querySelectorAll('.indicator');
        
        // Remove active class from current indicator
        indicators[currentIndex].classList.remove('active');
        
        // Update index
        currentIndex = index;
        if (currentIndex < 0) currentIndex = config.testimonials.length - 1;
        if (currentIndex >= config.testimonials.length) currentIndex = 0;
        
        // Add active class to new indicator
        indicators[currentIndex].classList.add('active');
        
        // Fade out current testimonial
        testimonialDisplay.style.opacity = '0';
        
        // After fade out, update content and fade in
        setTimeout(() => {
            displayTestimonial(currentIndex);
            testimonialDisplay.style.opacity = '1';
        }, 300);
    }
    
    // Display first testimonial
    displayTestimonial(currentIndex);
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    
    // Auto-slide testimonials
    let autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 8000);
    
    // Pause auto-slide on hover
    testimonialContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    testimonialContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 8000);
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(contactForm);
    const templateParams = {
        to_email: 'theastronox@gmail.com',
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        phone: formData.get('phone'),
        birth_date: formData.get('birth-date'),
        birth_time: formData.get('birth-time'),
        birth_place: formData.get('birth-place'),
        service: formData.get('service'),
        message: formData.get('message')
    };

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_2dkmuk4',
            'template_9tqwchf',
            templateParams
        );

        if (response.status === 200) {
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        // Show error message
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact us directly at theastronox@gmail.com');
    } finally {
        // Reset button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createZodiacWheel();
    createMandalaPatterns();
    setupTestimonials();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Improved animation on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                if (entry.target.classList.contains('about')) {
                    gsap.from('.about-image', { 
                        opacity: 0, 
                        x: window.innerWidth <= 768 ? 0 : -50, 
                        y: window.innerWidth <= 768 ? 30 : 0,
                        duration: 0.8, 
                        delay: 0.2,
                        clearProps: 'all'
                    });
                    gsap.from('.about-text', { 
                        opacity: 0, 
                        x: window.innerWidth <= 768 ? 0 : 50,
                        y: window.innerWidth <= 768 ? 30 : 0, 
                        duration: 0.8, 
                        delay: 0.2,
                        clearProps: 'all'
                    });
                }
                
                if (entry.target.classList.contains('services')) {
                    gsap.from('.service-card', { 
                        opacity: 0, 
                        y: 30, 
                        duration: 0.6, 
                        stagger: 0.15,
                        clearProps: 'all'
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Update the animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.2; }
        100% { opacity: 1; }
    }
    
    @keyframes floatRangoli {
        0% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(10px, 10px) rotate(180deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
    }
    
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from { 
            opacity: 0; 
            transform: translateY(15px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }

    @media (max-width: 768px) {
        .service-card {
            width: 100%;
            margin: 1rem 0;
        }
        
        .testimonial {
            padding: 1rem;
        }
        
        .testimonial-quote {
            font-size: 0.9rem;
            line-height: 1.5;
        }
        
        .testimonial-author {
            font-size: 0.8rem;
        }
    }

    .testimonial-display {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        opacity: 1;
        transition: opacity 0.3s ease;
        padding: 2rem 1rem;
        position: relative;
    }
    
    .testimonial-content {
        text-align: center;
        padding: 0 20px;
    }
    
    .testimonial-quote {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        color: #333;
    }
    
    .testimonial-author {
        font-weight: bold;
        color: #6b275a;
        font-size: 1rem;
    }
    
    .carousel-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
    .carousel-indicators {
        display: flex;
        gap: 0.8rem;
    }
    
    .indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ddd;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .indicator.active {
        background-color: #6b275a;
        transform: scale(1.2);
    }
    
    .prev-btn,
    .next-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.8rem;
        color: #6b275a;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .prev-btn:hover,
    .next-btn:hover {
        opacity: 0.7;
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        .testimonial-display {
            padding: 1rem;
        }
        
        .testimonial-quote {
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
        
        .testimonial-author {
            font-size: 0.9rem;
        }
        
        .carousel-controls {
            margin-top: 1rem;
            gap: 1rem;
        }
        
        .indicator {
            width: 8px;
            height: 8px;
        }
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        background-color: #999;
    }

    .submit-btn {
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        header {
            padding: 0.7rem 5% !important;
            width: 100% !important;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo-svg {
            width: 40px;
            height: 40px;
        }

        .logo-text {
            font-size: 1.2rem;
        }

        .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: auto;
            background: rgba(255, 255, 255, 0.95);
            flex-direction: column;
            padding: 1rem 0;
            transition: left 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-links.active {
            left: 0;
        }

        .nav-links li {
            margin: 1rem 0;
            width: 100%;
            text-align: center;
        }

        .hero-content {
            padding: 2rem 1rem;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
        }

        .hero-content h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .hero-content p {
            font-size: 1.1rem;
        }

        .zodiac-wheel {
            width: 70%;
            max-width: 300px;
            margin: 2rem auto;
        }

        .cta-button {
            display: inline-block;
            margin: 3rem auto;
        }

        .stars-container {
            overflow: hidden;
            width: 100%;
        }

        main {
            overflow-x: hidden;
            width: 100%;
        }

        section {
            padding: 3rem 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .section-header {
            margin-bottom: 2rem;
        }

        .section-header h2 {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 768px) {
        .rangoli-pattern {
            width: 40px !important;
            height: 40px !important;
        }

        @keyframes floatRangoli {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(5px, 5px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
        }

        .fade-in {
            animation: fadeIn 0.6s ease forwards;
        }

        .zodiac-svg {
            transform-origin: center;
            width: 100%;
            height: auto;
        }
    }
`;
document.head.appendChild(styleSheet);