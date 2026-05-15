function heartToggle(click) {
  if (!click) {
    heart.textContent = `${'🖤'}`
    favBtn.textContent = 'Add to favorite'
  } else {
    heart.textContent = `${'❤️'}`
    favBtn.textContent = 'Added to favorite'
  }
}

export { heartToggle }
