// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

const tabsHeader = document.querySelector('.tabs-header');
const buttonTabs = document.querySelectorAll('.button-tab');
const tabContent = document.querySelectorAll('.tab-content');


tabsHeader.addEventListener('click', function(e) {
    const clicked = e.target.closest('.button-tab');

    // 1:  if no click
    if (!clicked) return;

    // 2: remove active
    buttonTabs.forEach(c => c.classList.remove('button-tab--active'));

    // 3: if clicked - add active class
    clicked.classList.add('button-tab--active');

    // 4: remove active content area
    tabContent.forEach(c => c.classList.remove('tab-content--active'));

    // 5: add active content area
    document.querySelector(`.tab-content--${clicked.dataset.tab}`).classList.add(`tab-content--active`); //
});