const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');

const products = document.querySelector('#products');
const sellers = document.querySelector('#sellers');
const earphone = document.querySelector('#earphone');
const launches = document.querySelector('#launches');



document.querySelector('.menu_button').addEventListener('click', (event) => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('visible')   
})

mobileMenu.querySelector('.mobile-menu_close')
    .addEventListener('click', (event) => {
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden')
    mobileMenu.classList.add('swing-out-right-bck')      
})

function scrollToSections (event) {
    const classes = event.target.className;
    if (classes.includes('menu-link')) {
        const content = event.target.inerText;
        switch (content) {
            case 'products': 
                links.products.scrollIntoView()
            case 'sellers': 
                links.sellers.scrollIntoView()
            case 'earphone': 
                links.earphone.scrollIntoView()
            case 'launches': 
                links.launches.scrollIntoView()
        }
    }
}

mobileMenu.addEventListener('click', scrollToSections);
header.addEventListener('click', scrollToSections);