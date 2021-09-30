function addEvents(){
    /* for Selecting colors */
    let clrs = document.querySelectorAll('.btn-clr-wheel');
    clrs.forEach(c => {
        c.addEventListener('click', (ev) => {
            ev.target.classList.toggle('clr-selected');
        });
    });

    /* shadow-animation */
    let btnAnimate = document.querySelector('.btn-animate');
    btnAnimate.addEventListener('click', (ev) => {
        let clrWheel = document.getElementById('clr-wheel');
        clrWheel.classList.toggle('shadow-animation');
    });
}
window.addEventListener('load', (ev) => {
    console.log(`Welcome!`);
    addEvents();
});