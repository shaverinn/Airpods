import scss from './scss/main.scss';
import creatMobileMenu from './js/mobile-menu';
import tabs from './js/tabs';
import Header from './js/header';
 
const headerr = new Header();
const links = new tabs();



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

mobileMenu.querySelector('.mobile-menu_close').addEventListener('click', (event) => {
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden')   
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













sds































function User(name = '') {
    this.name = name;
    this.hasJob = false;
    this.children = false
    this.age = 0;
    this.checkHasJob = function () {
        if (this.hasJob) {
            console.log(`${this.name} работает`)
        } else {
            console.log(`${this.name} не работает`)
        }
    }
    this.setHasJob = function () {
        this.hasJob = bool;
    }
    this.setAge = function () {
        if(num>0 && num<100) {
            this.age = num;
            } else {
                console.log('Введите возраст от 0 до 100')
            }
        }
    this.checkAgee = function () {
        console.log(this.age)
    }
}




const user2 = new User('<NAME>');
const user3 = new User('<NAME>');
const user4 = new User('<NAME>');
const user5 = new User('<NAME>');
const user6 = new User('<NAME>');
const user7 = new User('<NAME>');

user2.setHasJob();
user2.setAge();
user2.checkAgee();
user2.checkHasJob();
user3.setHasJob();



class student {

    constructor (name) {
        this.name = name;
        this.age = 0;
        this.hasJob = false;
        this.children = false;
        
    }
    checkIsLearn() {

    }
}

const anna = new student();


// 1 - Создать класс ElemHTML

// 2 - Создать классы наследники на каждую секцию из index.html

// 3 - Очистить файл index.html, в нем не должно быть текста

// 4 - Добавить на страницу с помощью классов секции html

// 5 - Добавить загрузчик картинок и обработчик файлов к webpack, заменить ссылки на картинки как показано на занятии


class ElemHTML { 
    elem = document.createElement('div');

    constructor(height = 0, width = 0, color = 'red') {

        this.height = height; 
        this.width = width;
        this.color = color;

        this.elem.style.height = this.height + 'px';
        this.elem.style.width = this.width + 'px';
        this.elem.style.backgroundColor = this.color;
    }   

    setParametrs(className ='') {
        this.elem.classList.add(className);
    }
    render () {
        document.querySelector('.header').insertAdjacentElement('beforeend', this.elem);
    
    }
    log() {
        console.log(this.elem);
    }
}


const block = new ElemHTML(100,100);

block.setParametrs('block');
block.render();