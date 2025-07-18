// Create floating particles
function createParticles() {
    const particleContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particleContainer.appendChild(particle);
    }
}

// Greeting with personalized message
const greeting = document.getElementById('hero-text');
const namePrompt = prompt("Siapa nama Anda? (Masukkan nama untuk pengalaman yang lebih personal)");
if (namePrompt) {
    greeting.textContent = `Welcome, ${namePrompt}!`;
}

// Enhanced form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('messageText').value.trim();
    const resultBox = document.getElementById('resultBox');

    // Validation
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields!");
        return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }
    
    if (!/^[0-9+\-\s()]+$/.test(phone)) {
        alert("Please enter a valid phone number!");
        return;
    }

    // Success animation
    resultBox.innerHTML = `
        <div style="animation: fadeIn 0.5s ease;">
            <h4 style="color: #4ecdc4; margin-bottom: 15px;">✨ Message Sent Successfully!</h4>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p style="margin-top: 15px; color: #4ecdc4;">We'll get back to you soon!</p>
        </div>
    `;

    // Reset form with animation
    this.reset();
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize particles
createParticles();

// Add dynamic typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect if name is provided
if (namePrompt) {
    setTimeout(() => {
        typeWriter(greeting, `Welcome, ${namePrompt}!`, 100);
    }, 1000);
}
