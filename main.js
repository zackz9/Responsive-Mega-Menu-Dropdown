const menuBtn = document.querySelector('.menuBtn');
const menuItems = document.querySelector('.menuItems');
const expandBtn = document.querySelectorAll('.expandBtn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');

});

expandBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
    });
});