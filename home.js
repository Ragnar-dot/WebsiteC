// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add 3D hover effect on course cards
document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('mouseenter', () => {
        course.style.transform = 'rotateY(5deg) translateY(-5px)';
    });

    course.addEventListener('mouseleave', () => {
        course.style.transform = 'rotateY(0) translateY(0)';
    });
});