'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// const header = document.querySelector('.header');
// console.log(document.documentElement);
// const allSections = document.querySelector('.section'); // node list
// so if we deleted one element from the list the element still will exist because the variable was created before
// console.log(allSections);
//
// document.getElementById('section--1');


// ====================== smoothly scroll:

// -------------- old school way:
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

    // Viewport
    // A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed.
    const s1coords = section1.getBoundingClientRect();

    console.log('s1coords = ', s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Currrent scroll (x/y):', window.pageXOffset, pageYOffset);

    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth'
    });

    //-------------  OR  modern way(only work in modern browser!):
    section1.scrollIntoView({behavior: 'smooth'});

})


// ======== Types of events, event handlers:
// 1. this way allows use to add multiple event listener to the same event:
// const h1 = document.querySelector('h1');
// const alertH1 = h1.addEventListener('mouseenter', function(e){
// alert('addEventListener: Great! You are reading the heading :D');
// });
// the same:
// const h1 = document.querySelector('h1');
// const alertH1 = function(e){
//   // alert('addEventListener: Great! You are reading the heading :D');
//   h1.addEventListener('mouseenter', alertH1);
//   setTimeout() => h1.removeEventListener('mouseenter', alertH1, 300);
// }

// or

// 2. or this way is not much used:
// h1.onmouseenter = function(e){
//   // alert('onmouseover: Great! You are reading the heading :D');
// }
//
// // rgb:
// // The Math.floor() function returns the largest integer less than or equal to a given number.
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log('Link', randomColor());
//   this.style.backgroundColor = randomColor();
//   console.log('LINK: ', e.target);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Link', randomColor());
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER: ', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // !!!! remember that in event handlers 'this' point to the element to which this event handler is attached.
//
//   // Stop propagation, but in pranctice it is NOT a good idea:
//   e.stopPropagation();
// });
//
// document.querySelector('.nav').addEventListener('click', function (e){
//   console.log('Link');
//   this.style.backgroundColor = randomColor();
//    console.log('NAV: ', e.target, e.currentTarget);
// }, true);

// bubling up - if the events happens in all of the parenth elements. That  the reason why this event happening...
// So both handlers work with the same event.


// Bubbling phase can be usefull for the event delegation phase:


// ======================== Event delegation:
// smooth scroling behaviour:


// ----------------- Page navigation:

// --- 1 way:
// this function is repeating many many times:
// so if we would have 100000000 elements then we will have 1000000 times this function repeating. So this solution is NOT the clear one!!!!
// That certainly will impact to the perfomance!!!!
// document.querySelectorAll('.nav_link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     console.log('LINK');
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })


// OR:
// better way is to use devent delegation:


// ---- 2 way (better):
// In event delegation we use the fact that events are bubbled up:
// We do that by putting the event listener on common parent of all the events that we are interested in.
// So when user clicks on one of the link the event is generated the bubbles up to all of other events. And then we can catch the event... We can look at in in event.target property.

// 2.1
// Add event listener to common parent element.

// 2.2
// Determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
    const id = e.target.getAttribute('href');
    e.preventDefault();
    console.log("That is target:", e.target); // we can see where the event occurent from this element

    // Mathching strategy:
    //  1 - check if matching element contains the class that we are interested in
    if (e.target.classList.contains('.nav__link')) {
        e.console.log('LINK');
        const id = e.target.getAttribute('href');
        document.querySelector(id).scorollIntoView({behavior: 'smooth'});
    }
})

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));


// ----- Going downwards: child
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color - 'oranged';


// ---- Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// ------- Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.prevouseSibling);
// console.log(h1.nextSibling);
//
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
//
// })


// // ======== TABBED component
// const tabs = document.querySelectorAll('.operations__tab-container');
// const tabsConteiner = document.querySelectorAll('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// !!!! This is bad practice!!! What if we have 10000 copies then we will have 10000 functions. That will slow down the page. So let's use event delegation(which means to attach the function to the element that is common):
// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

// OR:

// better way is to use event delegation:
// tabsConteiner.addEventListener('click', function(e){
//   // const clicked = e.target.parentElement;
//   const clicked = e.target.closest('.operations__tab');
//   console.log(clicked);
//
//   // Guard class;
//   if(!clicked) return;
//
//   // Active tab
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//
//   // Activate content area:
//   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(`operations__content--active`);
// });
//


// =========== Menu fade animation:
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelector('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
        })
        logo.style.opacity = 0.5;
    }
}); // it is similar to 'mouseenter', but mouseenter does not bubble.

nav.addEventListener('mouseout', function (e) {

});


// ============== Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// bad way:
// select all of tabs and the add event listener to each of them.
tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); // do NOT do like this!!!!!!

// OR:
// Use event delegations
// Remember that in event delegation we should attach the event handler to the commoon element.

tabsContainer.addEventListener('click', function (e) {
    // const clicked = e.target;
    // console.log(clicked);
    // but problem is that if we click on the number in the button, then we the click is not on the button, but on the span element.
    // The one way is to read the click at the parent element.
    const clicked = e.target.closest('.operations__tab');
    console.log("clicked = ", clicked);


    if (!clicked) return; // this is more modern way!!! This looks a bit nicer and a bit cleaner.
    // or
    // if(clicked){
    //   clicked.classList.add('operations__tab--active');
    // }

    // Activate tab:
    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    // Remove active classes
    clicked.classList.add('operations__tab--active');

    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate content area:
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})


// ======== Menu fade animation:
// const nav = documents.querySelector('.nav');

// const handleHover = function(e, opacity){
//   // Remember that 'this' keyword is usually the current target
//   console.log(this, e.currentTarget);
//   if(e.target.classList.contains('nav__link')){
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelector('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');
//
//   siblings.forEach(el => {
//     if(el !== link) el.style.opacity = this;
//   });
//   logo.style.opacity = opacity;
// }};
//
// // mouseenter does NOT bubble!!!!!
// // mouseover -> mouseout
// // mouseenter -> mouseleave
//
// // Passing 'argument' into handler
// nav.addEventListener('mouseover', handleHover.bind(1));
//
// // or this way, but first one looks better with bind.
// nav.addEventListener('mouseout', function(e){
//   handleHover(e, 1);
// });


// ========== Implement a sticky navigation: the scroll event
// this is bad way, espetially on mobile:
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// or

// ------Example:
// better way: intersection observer API:
// Intersection API - is the way to observe changes in the way that certain target element intersects another target element and in the way it intersects the view port.

// The callback funciton will be called each time that the observed element(so the target element here) is intersecting the root element at the trashhold that we defined.
// const obsCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root: null, // because we are interesed in entire viewport
//   threshold: 0.1 // We can think about it as a persentage we want to be visible in our root so in our viewport in this case.
//   // 0 means that the callback will be trigered each time when the target element moves completely out of the view and also as soon as it enters the view. That is because the callback function will be called when the trashhold is passed when moving into the view and moving out the view.
// };
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


// ----- Let's use it to implement on sticky navigation:
// - When do we want to implement our navigation sticky?
// - We want it when the header moves completely out of the view.

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log("navHeight = ", navHeight);

const stickyNav = function (entries) {
    const [entry] = entries; // that is the same as writing entries[0]
    // console.log(entry);
    // nav.classList.add('sticky');
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, // because we are interested in entire viewport
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);


// =========== Revealing elements on scroll (using IntersactionObserver API)

// 1. Reveal sections:
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target); // important to do, good for performance!!!
}
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
})


// ============ Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src'); // select all the images thats have the propertie data-source

const loadImg = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;


    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));


// =============== Slider
const slider = function() {


    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

    let curSlide = 0;
    const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s, currentIndex) => {
//   console.log("currentIndex = ", currentIndex);
//   s.style.transform = `translateX(${100 * currentIndex}%)`;
//   console.log("s = ", s);
//
// });
// // first slide: 0%, 100%, 200% 300%...

    const goToSlide = function (slide) {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    }


// Go to the next slide:
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        slides.forEach((s, i) => s.style.transoform = `translateX(${100 * (i - curSlide)}%)`);
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        // curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
    }

    const init = function () {
        goToSlide(0);
        activateDot(0);
        createDots();
    }


// event handlers:
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        // console.log(e);
        if (e.key === 'ArrowLeft') prevSlide();
        // or we can use shirtcircuting:
        // for example:
        e.key === 'ArrowRight' && nextSlide();
    })

// ------- dots
    const dotContainer = document.querySelector('.dots');

    const createDots = function () {
        // _ - convention of the throw
        slides.forEach((function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        }));
    }


// Activate dot:
    const activateDot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
        console.log("slide = ", slide);

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }

    init();

    dotContainer.addEventListener('click', function (e) {
        // console.log(e);
        if (e.target.classList.contains('dots__dot')) {
            // const slide = e.target.dataset.slide;
            // or:
            // let's use destructuring
            const {slide} = e.target.dataset;
            goToSlide(slide);
        }
    })
}
slider();
// goToSlide(0);



// ====================== Events
document.addEventListener('DOMContentLoaded', function(e){
    console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function(e){
    console.log('Page fully loaded', e);
});

// before the user leave the page
// so we can use this event to ask users if they 100% sure that they want to leave the page.
window.addEventListener('beforeunload', function(e){
    e.preventDefault();
    console.log(e);
    e.returnValue = ''; // this looks weird, but it is because of historical reasons.
})