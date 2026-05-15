function triggerShake(element) {
  element.classList.add('shake')

  setTimeout(() => {
    element.classList.remove('shake')
  }, 300)
}






else {
    favBtn.textContent = 'Already added!'
    triggerShake(wholeFavoriteButton)

    setTimeout(() => {
      favBtn.textContent = 'Add to favorite'
    }, 1000)
  }