// Function to go to the next slide with fade transition
function nextSlide(slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    const slides = slideshow.querySelectorAll(".slide");
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    slides[currentIndex].classList.remove("active");
    const nextIndex = (currentIndex + 1) % slides.length;
    slides[nextIndex].classList.add("active");
}

// Function to go to the previous slide
function prevSlide(slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    const slides = slideshow.querySelectorAll(".slide");
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    slides[currentIndex].classList.remove("active");
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[prevIndex].classList.add("active");
}

// Function to set up an automatic slideshow with fade effect
function startAutoSlideshow(slideshowId, interval = 3000) {
    setInterval(() => {
        nextSlide(slideshowId);
    }, interval);
}

// Start automatic slideshows for all cats
document.addEventListener("DOMContentLoaded", () => {
    startAutoSlideshow("marcie-slideshow");
    startAutoSlideshow("boy-slideshow");
});
