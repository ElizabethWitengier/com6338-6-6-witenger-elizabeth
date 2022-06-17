var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')
var section = document.querySelector('section')
var banner = document.querySelector('.banner')
var footer = document.querySelector('footer')

function openMenu () {
  hamburgerMenu.classList.toggle('show-menu')
  hamburgerMenu.focus()
  hamburgerBtn.getAttribute('aria-expanded', true)
  hamburgerBtn.setAttribute('aria-expanded', false)
}

function closeMenu () {
  hamburgerMenu.classList.remove('show-menu')
  hamburgerBtn.focus()
  hamburgerBtn.setAttribute('aria-expanded', false)
}

hamburgerBtn.onclick = openMenu
section.onclick = closeMenu
banner.onclick = closeMenu
footer.onclick = closeMenu

document.onkeyup = function(e) {
  if (e.key === 'Escape')
    closeMenu()
}