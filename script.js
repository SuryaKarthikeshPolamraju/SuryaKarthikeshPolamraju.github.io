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
const observerOptions = {
    threshold: 0.2  // Adjusts how much of the section must be visible before the animation
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// Button hover effect (pulse animation)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => button.classList.add('pulse'));
    button.addEventListener('mouseout', () => button.classList.remove('pulse'));
});

// Zoom-in animation for project cards on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.4s ease";
    });
    card.addEventListener('mouseout', () => card.style.transform = "scale(1)");
});

// Scroll-triggered fade-in and slide-up animation for the title in the home section
const title = document.querySelector('.title');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = '1';
        title.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
    } else {
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
    }
});
