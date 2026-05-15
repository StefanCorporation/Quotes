function setInLocalStorage(key, value) {
  if (typeof key !== 'string') {
    throw new Error('Key  must be string')
  }

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(`Error setting item in localStorage! ${error}`)
  }
}

function getFromLocalStorage(key, defaultValue = null) {
  const value = localStorage.getItem(key)
  if (value && typeof value !== 'string') {
    throw new Error('Value must be a string.')
  }
  return value ? JSON.parse(value) : defaultValue
}

function removeFromLocalStorage(key) {
  if (!key) {
    throw new Error('Key is required')
  }
  localStorage.removeItem(key)
}

export { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage }
