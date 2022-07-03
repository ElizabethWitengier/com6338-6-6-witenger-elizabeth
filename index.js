var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')
var section = document.querySelector('section')
var banner = document.querySelector('.banner')
var footer = document.querySelector('footer')

function openMenu () {
  hamburgerMenu.classList.toggle('show-menu')
  hamburgerMenu.focus()
  if(hamburgerMenu.classList.contains('show-menu')){hamburgerBtn.setAttribute('aria-expanded', true)
  } else {
  hamburgerBtn.setAttribute('aria-expanded', false)
  }
}

function closeMenu () {
  hamburgerMenu.classList.remove('show-menu')
  hamburgerBtn.focus()
}

hamburgerBtn.onclick = openMenu
section.onclick = closeMenu
banner.onclick = closeMenu
footer.onclick = closeMenu

document.onkeyup = function(e) {
  if (e.key === 'Escape')
    closeMenu()
}