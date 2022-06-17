var menu = document.getElementsByClassName('menu')
var hamMenu = document.getElementsByClassName('hamburger-menu')
var bodyE1 = document.querySelector('body')
var btn = document.getElementsByClassName('hamburger-btn')

function launchMenu () {
  hamMenu.classList.add('show-menu')
}

function launchMenu () {
  hamMenu.classList.remove('show-menu')
}

btn.onclick = launchMenu