const mobilMenu = document.querySelector('.mobil-menu');
const header = document.querySelector('.header');

const products = document.querySelector('#products');
const sellers = document.querySelector('#sellers');
const earphone = document.querySelector('#earphone');
const launches = document.querySelector('#launches');



document.querySelector('.mobil-menu').addEventListener('click', () => {
    mobilMenu.classList.remove('hidden');
    mobilMenu.classList.add('visible')   
})

mobilMenu.querySelector('.mobil-menu__close')
.addEventListener('click', () => {
    mobilMenu.classList.remove('visible');
    mobilMenu.classList.add('hidden')   
})

function scrollToSections (event) {
    const classes = event.target.classList;
    if (classes.includes('link')) {
        const content = event.target.inerText;
    }
}

mobilMenu.addEventListener('click', scrollToSections);
header.addEventListener('click', scrollToSections);