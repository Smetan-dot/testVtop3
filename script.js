function changeLang(){
    const button = document.querySelectorAll('.buttons-item')[0];
    const span = document.getElementById('lang-span');
  
    button.addEventListener('click', () => {
        if(span.textContent === 'EN') span.textContent = 'RU'
        else span.textContent = 'EN';
    })
}

changeLang();

function activateBurger(){
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('visible');
    })
}

activateBurger();