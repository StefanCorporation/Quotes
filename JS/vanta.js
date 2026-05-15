let effect = null

function initVanta() {
  effect = VANTA.WAVES({
    el: '#vanta',
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x6969,
  })
}

function setVantaColor(color) {
  if (effect) {
    effect.setOptions({ color })
  }
}

export { initVanta, setVantaColor }
