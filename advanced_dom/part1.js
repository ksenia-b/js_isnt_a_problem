// !!!!!!!!!!!!!!
const allButtons = document.getElementsByTagName('button'); // this returns Html.collection!!! And that means if the dom changed the collection will be updated automatically.
console.log(allButtons);

console.log(document.getElementByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

// or
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';

message.innerHTML = 'We use cookies for ... <button>OK</button>';

//  DOM TRAVERSING = removing and adding elements to/from the DOM tree.
// it adds the element as the first child to the parent element:
header.prepend(message);

// it adds the element as the last child to the parent element:
header.append(message);
header.append(message.cloneNode(true));

header.before(message);
header.after(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  message.parentElement.removeChild(message);
});


// STYLES, ATTRIBUTES AND CLASSES:
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.parentElement.removeChild(message);
});

message.style.backgroundColor = '#3738d';
message.style.width = '120%';

console.log(message.style.height); // !!!! would only work with styles that we set manualy by ourselves!!! but it would NOT work with classed that are hidden!!! or that doesn't even exists!!!


// but we can get styles if we want to to use:
getComputedStyle(message).color;
getComputedStyle(message).height;

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// in CSS we call properties == variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.alt);
// js will create properties automaticaly if the properties, specified in html are standart. If the properties in html are custom then js will NOT create them in js. So those properties would NOT be allowed in js: would be undefined!

// className, not Class by the historical reasons.

// BUT there is another way to read that value(I mean for getting non-standart attribute). So we can use .getAttribute()
logo.getAttribute('designer');

logo.setAttribute('company', 'Bankist');


// Look at the difference:
console.log(logo.src);
// result: http://localhost:63342/js_isnt_a_problem/advanced_dom/bankist/img/logo.png
console.log(logo.getAttribute('src'));
// result: img/logo.png

const link = document.querySelector('.twitter-link');
console.log(link.href);

console.log(link.getAttribute('href'));


// ------ Data attribute:
// one more example of attribute:
// It starts with 'data-' and then smth other

// Important!!! to keep in mind that in html it is written with dash and in js we should transform it in camelCase!!!
console.log(logo.dataset.varsionNumber);

// -------- Classes
logo.classLIst.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // pay attention that it is called 'contains' and not 'include' as it called in arrays.

// !!!! don't use this because it will owerwrite all the existing classes and also it is allowed to have only one class to one element:
logo.className = 'Jonas';



// ========== Bubbling and capturing
// Capturing phase.
//
// The events bubbled up from the target to the document root.
// So event passes throught all of its parent elements.

// Not all types of events do have Capturing and Bubbles phase. Some of them are created on the target and we can only capture them there. But most of events have.
// Also we can call it event propagating.



// =============== DOM TRAVERSING - walking through the DOM. This means that we can select element based on other element. Or sometime we don't know the structure of the DOM. In this case we need DOM tranversing.