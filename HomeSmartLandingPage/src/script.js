const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menubar");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
});