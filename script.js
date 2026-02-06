// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.poem-card, .photo-frame').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Parallax for the Name
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const name = document.querySelector('.glow-text');
    name.style.transform = `translateY(${scrolled * 0.3}px)`;
    name.style.opacity = 1 - (scrolled / 600);
});

// Small console secret for her
console.log("%cHey Hanin! Sayed loves you more than code.", "color: #e5b4a2; font-size: 20px; font-weight: bold;");