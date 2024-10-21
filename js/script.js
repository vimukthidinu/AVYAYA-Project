let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Auto slide
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);

showSlide(slideIndex);



