getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your inquiry has been submitted! We will contact you shortly.');
    this.reset();
});

// Smooth Scroll for Navigation
querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});