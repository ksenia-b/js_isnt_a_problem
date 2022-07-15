// Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
const maxSlide = slides.length;
let curSlide = 0;

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);


const nextSlide = function () {
    console.log("next slide...")
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
};

const prevSlide = function () {
    console.log("prev slide...")
    if (curSlide === 0) {
        curSlide = maxSlide - 1 - curSlide;
    }
    else {
        curSlide--;
    }

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'ArrowLeft') prev
})

// convention of the throw - the variable that we don't need!!!!!!!!
const createDots = function(){
    slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    });
}

createDots();

dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const {slide} = e.target.dataset;
          slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    }
})


const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dot__dot[data-slide="${slide}"]`).classList.add('dots__dot-active');
}

