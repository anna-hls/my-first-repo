document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-card');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function changeSlide(step) {
        slideIndex = (slideIndex + step + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });

    showSlide(slideIndex);

    setInterval(() => {
        changeSlide(1);
    }, 3500);
});
