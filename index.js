const right = document.getElementById('right');
const left = document.getElementById('left');
const test = document.getElementById('test');
const slideNumber = document.getElementById('slide-number');
const menu = document.getElementById('menu');
const newMenu = document.getElementById('newMenu');
const slider = document.getElementById('slider');
const closeElement = document.getElementById('close');
const bg = ['url("./assets/bg1.png")', 'url("./assets/bg2.png")'];
const closeSearch = document.getElementById('closeSearch');
const fullMenu = document.getElementsByClassName('full-menu')[0];
const footer = document.getElementsByClassName('main-section2')[0];
const firstImage = document.getElementsByClassName('menu-item-img1')[0];
const secondImage = document.getElementsByClassName('menu-item-img2')[0];
const search = document.getElementsByClassName('header__second-section__search')[0];
const sliderValue = document.getElementsByClassName('main-section2__slider')[0];
const menuItems = document.getElementsByClassName('header__second-section')[0];
const main = document.getElementsByClassName('main')[0];
const sliderItem = document.getElementsByClassName('slider-item')[0];
const fullSearch = document.getElementsByClassName('full-search')[0];
let count = 1;
let marginLeft = 0;

right.addEventListener('click', () => {
  if(count < 5) {
    main.style.backgroundImage = bg[count % bg.length];
    marginLeft -= 786;
    test.style.marginLeft = `${marginLeft}px`;
    count++;
    slideNumber.textContent = `0${count}`;
  }
})

left.addEventListener('click', () => {
  if(count > 1) {
    main.style.backgroundImage = bg[count % bg.length];
    marginLeft += 786;
    test.style.marginLeft = `${marginLeft}px`;
    count--;
    slideNumber.textContent = `0${count}`;
  }
})

menu.addEventListener('click', showMenu);

newMenu.addEventListener('click', () => {
  showMenu();
  fullSearch.style.display = 'none';
})

function showMenu() {
  slider.style.display = 'none';
  sliderValue.style.display = 'none';
  menuItems.style.display = 'none';
  closeElement.style.display = 'flex';
  fullMenu.style.display = 'block';
  footer.style.width = '1440px';
  footer.style.margin = '170px 0 0 0';
  footer.style.justifyContent = 'center';
  main.style.backgroundImage = 'url("./assets/menuBg.png")';
}

closeElement.addEventListener('click', () => {
  slider.style.display = 'flex';
  sliderValue.style.display = 'flex';
  menuItems.style.display = 'flex';
  closeElement.style.display = 'none';
  fullMenu.style.display = 'none';
  footer.style.width = '757px';
  footer.style.margin = '170px 0 0 120px';
  footer.style.justifyContent = 'space-between';
  main.style.backgroundImage = bg[count - 1 % bg.length];
})

fullMenu.addEventListener('mousemove', (event) => {
  let {target} = event;
  if (target.classList.value === 'menu-item') {
    if (target.textContent.toLowerCase() === 'interior') {
      firstImage.style.display = 'block';
      firstImage.style.opacity = 1;
    }
    if (target.textContent.toLowerCase() === 'architecture') {
      secondImage.style.display = 'block';
      secondImage.style.opacity = 1;
    }
  } else {
    firstImage.style.display = 'none';
    secondImage.style.display = 'none';
  }
})

search.addEventListener('click', () => {
  menuItems.style.display = 'none';
  fullSearch.style.display = 'flex';
  menu.style.display = 'block';
})

closeSearch.addEventListener('click', () => {
  menuItems.style.display = 'flex';
  fullSearch.style.display = 'none';
})