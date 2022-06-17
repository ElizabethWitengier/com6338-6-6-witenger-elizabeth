var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')
var menu = document.getElementsByClassName('menu')
var bodyE1 = document.querySelector('body')


hamburgerBtn.addEventListener("click", () => {
  
  hamburgerMenu.classList.toggle("show-menu")
})