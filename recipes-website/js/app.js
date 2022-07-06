const getElement = (selector) => {
    const element = document.querySelector(selector);
    if(element){
      return element;
    }

    throw Error(`There is no element for ${selector} selector`);
    
}

const linksContainer = getElement('.nav-links');
const navBtnToggle = getElement('.nav-btn');
navBtnToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('toggle-nav-links');
});

const copyRightDate = document.getElementById('date');
const currentYear = new Date().getFullYear();
copyRightDate.textContent = currentYear;
