const humburger = document.querySelector('.nav-list .humburger');
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header.container');
const nav_items = document.querySelectorAll('.header .nav-list ul a');


humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor =  'transparent';
    }
});

nav_items.forEach((item) => {
    item.addEventListener('click', ()=> {
        humburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

