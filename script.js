const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const deleteMenu = document.querySelector('.menu.delete-menu');

menuBtn.addEventListener('click',function() {
    menu.classList.add('active');
});

deleteMenu.addEventListener('click',function () {
    menu.classList.remove('active');
    
});