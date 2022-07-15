document.addEventListener("DOMContentLoaded", () => {
   const options = {
    root: null, // the size of Viewport, null - means all screen
    // rootMargin: "-100px 0px",
    threshold: 0.11 // top and bottom 255px, what persentage would be touching the viewport?
};

const observer = new IntersectionObserver(beTouching, options);

document.querySelectorAll('.container p').forEach(p => {
    // console.log(p)
    observer.observe(p);
    // console.log('watching ', p.textContent)
})

})

function beTouching(entries, ob) {
    // entries - all 30 paragraphs

    // entries.forEach(entry => {
    //     if(entry.isIntersecting){
    //         console.log("intersecting")
    //     }
    // })
    entries.forEach(entry => {
        console.log("entry = ", entry.isIntersecting);
        if (entry.isIntersecting) {
            console.log('intersecting', entry.target);
            console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add("active");
            // observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove("active");
        }
        // console.log(entry.time, entry.intersectionRatio);
    })
    // document.querySelector('.container p').addClassName('active');
}