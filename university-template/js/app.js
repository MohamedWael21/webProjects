const hideNavMenuButton = document.getElementById("close");
const openNavMenuButton = document.getElementById("open");
const navMenuContainer = document.querySelector('.nav-links');

function openNavMenu(){
    navMenuContainer.style.right = '0';
}

function closeNavMenu(){
    navMenuContainer.style.right = '-12.5rem';      
}

hideNavMenuButton.addEventListener('click', closeNavMenu);
openNavMenuButton.addEventListener('click', openNavMenu);