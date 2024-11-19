let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function updateActiveSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });
    slides[currentSlide].classList.add("active");
}

function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateActiveSlide();
}

prevBtn.addEventListener("click", function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateActiveSlide();
});

nextBtn.addEventListener("click", next);

let slideInterval = setInterval(next, 5000);

document.querySelector(".slider").addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
    slideInterval = setInterval(next, 5000);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        prevBtn.click();
    } else if (e.key === "ArrowRight") {
        nextBtn.click();
    }
});

updateActiveSlide();
