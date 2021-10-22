document.addEventListener('DOMContentLoaded', ()=>{

    const headerBurger = document.querySelector('.header-burger');
    const headerBurgerImg = document.querySelector('.header-burger__img');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const socialList = document.querySelector('.social-list');

    headerBurger.addEventListener('click', ()=>{
        overlay.style.display = 'block';
        headerBurgerImg.style.display = 'none';
        socialList.style.display = 'none';
    });

    closeBtn.addEventListener('click', ()=>{
        overlay.style.display = 'none';
        headerBurgerImg.style.display = 'block';
        socialList.style.display = 'block';
    });

});