const header = document.querySelector('.main-content header');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});