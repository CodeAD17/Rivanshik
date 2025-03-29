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
    
    // Create testimonials
    config.testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial' + (index === 0 ? ' active' : '');
        testimonialElement.innerHTML = `
            <div class="testimonial-quote">${testimonial.quote}</div>
            <div class="testimonial-author">${testimonial.author}</div>
        `;
        testimonialContainer.appendChild(testimonialElement);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (index === 0 ? ' active' : '');
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
        carouselIndicators.appendChild(indicator);
    });
    
    // Next and previous buttons
    function goToSlide(index) {
        const testimonials = document.querySelectorAll('.testimonial');
        const indicators = document.querySelectorAll('.indicator');
        
        // Remove active class from current
        testimonials[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        // Update index
        currentIndex = index;
        if (currentIndex < 0) currentIndex = testimonials.length - 1;
        if (currentIndex >= testimonials.length) currentIndex = 0;
        
        // Add active class to new
        testimonials[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    
    // Auto-slide testimonials
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 8000);
}

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would process the form data here
    // For this example, just show a confirmation message
    const formData = new FormData(contactForm);
    let message = 'Thank you for contacting us!\n\nYour details:\n';
    
    for (const [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
    }
    
    alert(message);
    contactForm.reset();
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
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add specific animations for different sections
                if (entry.target.classList.contains('about')) {
                    gsap.from('.about-image', { opacity: 0, x: -50, duration: 1, delay: 0.3 });
                    gsap.from('.about-text', { opacity: 0, x: 50, duration: 1, delay: 0.3 });
                }
                
                if (entry.target.classList.contains('services')) {
                    gsap.from('.service-card', { 
                        opacity: 0, 
                        y: 50, 
                        duration: 0.8, 
                        stagger: 0.2 
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

// Add the new animation to stylesheet
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.2; }
        100% { opacity: 1; }
    }
    
    @keyframes floatRangoli {
        0% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(180deg); }
        100% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(360deg); }
    }
    
    .fade-in {
        animation: fadeIn 1s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);