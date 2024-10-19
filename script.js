// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when scrolling into sections
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Button hover effect (pulse animation)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.classList.add('pulse');
    });

    button.addEventListener('mouseout', function () {
        this.classList.remove('pulse');
    });
});
