let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

function updateSlidePosition() {
    const offset = -currentSlide * 100; // Calculate the offset
    slidesContainer.style.transform = `translateX(${offset}%)`; // Slide the container
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Increment and loop back to start
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Decrement and loop to end
    updateSlidePosition();
}

// Initialize the first slide position
updateSlidePosition();
