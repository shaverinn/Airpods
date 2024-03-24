const loginbutton = document.getElementById('login');
const modal = document.getElementById('modal');

loginbutton.addEventListener('click', () => {
    modal.classList.remove('display_none')
})

const closebutton = document.getElementById('close_button_modal')

closebutton.addEventListener('click', () => {
    modal.classList.add('display_none')
})

const logoutbutton = document.getElementById('backdrope')

logoutbutton.addEventListener('click', (e) => {
    console.log(e);
    modal.classList.add('display_none')
})