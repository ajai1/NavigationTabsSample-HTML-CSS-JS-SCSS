var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var openMenu = document.getElementById('open-menu');

openMenu.addEventListener('click',function(){
    overlay.classList.remove('close-menu');
    overlay.classList.add('show-menu');
});


closeMenu.addEventListener('click', function(){
    overlay.classList.remove('show-menu');
    overlay.classList.add('close-menu');
});


document.getElementById('home-btn').addEventListener('click', function(){
    overlay.classList.remove('show-menu');
    overlay.classList.add('close-menu');
});