const SLIDES = document.querySelectorAll('.slider__item');
const DOTS = document.querySelectorAll('.slider-dots__item');
const TITLE = document.querySelector('.slider__text');
let slideIndex = 1;
const showSlides = n => {
    let i;
    if (n > SLIDES.length) slideIndex = 1;
    if (n < 1) slideIndex = SLIDES.length;
    for (i = 0; i < SLIDES.length; i++) {
        SLIDES[i].style.display = 'none';
        // SLIDES[i].style.transform = 'translateX(100%)';
    }
    for (i = 0; i < DOTS.length; i++) {
        DOTS[i].classList.remove('active');
        DOTS[i].firstElementChild.checked = false;
        DOTS[i].checked = false;
    }
    SLIDES[slideIndex - 1].style.display = 'block';
    // SLIDES[slideIndex - 1].style.transform = 'translateX(0)';
    DOTS[slideIndex - 1].classList.add('active');
    DOTS[slideIndex - 1].firstElementChild.checked = true;
    DOTS[slideIndex - 1].checked = true;
    TITLE.textContent = DOTS[slideIndex - 1].dataset.title;
}

showSlides(slideIndex);

const currentSlide = n => showSlides(slideIndex = n);

for(let i = 0; i < DOTS.length; i++) {
    DOTS[i].addEventListener('click', () => currentSlide(i+1));
}