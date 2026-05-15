import { setVantaColor } from '../JS/vanta.js'

function setDarkTheme() {
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    setVantaColor(0x2f3737)
  } else {
    setVantaColor(0x6969)
  }
}

export { setDarkTheme }
