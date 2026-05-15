import data from './quotes.js'
import { generateRnadomInt } from './utils/math.js'
import { initVanta, setVantaColor } from './JS/vanta.js'
import { generateHexId } from './utils/idGenerator.js'
import { heartToggle } from './utils/heartToggle.js'
import { setDarkTheme } from './utils/darkMode.js'
import {
  getFromLocalStorage,
  setInLocalStorage,
  removeFromLocalStorage,
} from './utils/localStorage.js'

initVanta()

const quotes = document.getElementById('quote')
const authors = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const wholeFavoriteButton = document.getElementById('favorite-btn')
const heart = document.getElementById('heart')
const tumbleweed = document.getElementById('tumbleweed')
const item = document.querySelector('.item')
const authorCard = document.getElementById('authorCard')
const quoteCard = document.getElementById('quoteCard')
const favContainer = document.getElementById('favs')

toggle.addEventListener('click', setDarkTheme)

let randomQuotes
const localObject = {}

console.log(localObject)
function generateRandomQuote() {
  return data[generateRnadomInt(data.length)]
}

function showRandomQuote(random) {
  quotes.textContent = `"${random.text}"`
  authors.textContent = `${random.author}`

  randomQuotes = random
  heartToggle(random.isFavorite)
}

generateBtn.addEventListener('click', () =>
  showRandomQuote(generateRandomQuote()),
)

function createCard(randomQuote) {
  const item = document.createElement('div')
  const author = document.createElement('div')
  const quote = document.createElement('div')
  const removeBtn = document.createElement('button')

  author.classList.add('favAuthor')
  quote.classList.add('favQuote')
  removeBtn.classList.add('removeBtn')
  removeBtn.textContent = `${'🗑️'}`
  item.classList.add('item')

  item.appendChild(author)
  item.appendChild(quote)
  item.appendChild(removeBtn)
  favContainer.appendChild(item)

  author.textContent = randomQuote.author
  quote.textContent = randomQuote.text

  tumbleweed.classList.add('hidden')
  item.classList.remove('hidden')
}

function getAllDataFLS(key = null) {
  const localData = JSON.parse(localStorage.localQuotes)

  if (localData) {
    for (const [key, value] of Object.entries(localData)) {
      console.log(`${key}: ${value.text}`)
      showFavoriteCards(value)
    }
  }
}

function showFavoriteCards(randomQuote) {
  createCard(randomQuote)
}

function addFavoriteCards(randomQuote) {
  let idforQuote = generateHexId()

  randomQuote.isFavorite = true
  randomQuote.id = idforQuote

  localObject[idforQuote] = randomQuote
  setInLocalStorage('localQuotes', localObject)

  showFavoriteCards(randomQuote)
}

document.addEventListener('DOMContentLoaded', getAllDataFLS)

wholeFavoriteButton.addEventListener('click', () =>
  addFavoriteCards(randomQuotes),
)
