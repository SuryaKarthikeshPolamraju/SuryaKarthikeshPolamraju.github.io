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
    threshold: 0.2  // Adjusts how much of the section must be visible before the animation
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

// Add zoom-in animation for project cards when hovered
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.4s ease";
    });

    card.addEventListener('mouseout', function () {
        this.style.transform = "scale(1)";
    });
});

// Add scroll-triggered fade-in and slide-up animation for the title in the home section
const title = document.querySelector('.title');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = '1';
        title.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
    } else {
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
    }
});
