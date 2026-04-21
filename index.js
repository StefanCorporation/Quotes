import data from './quotes.js'
import { generateRnadomInt } from './utils.js'

const quotes = document.getElementById('quote')
const authors = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
const wholeFavoriteButton = document.getElementById('favorite-btn')
const favsContainer = document.getElementById('favs')
const heart = document.getElementById('heart')
let tumbleweed = document.getElementById('tumbleweed')

let randomQuotes

function heartToggle(click) {
  if (!click) {
    heart.textContent = `${'🖤'}`
    favBtn.textContent = 'Add to favorite'
  } else {
    heart.textContent = `${'❤️'}`
    favBtn.textContent = 'Added to favorite'
  }
}

function randomQuote() {
  return data[generateRnadomInt(data.length)]
}

function showRandomQuote(random) {
  quotes.textContent = `"${random.text}"`
  authors.textContent = `${random.author}`

  randomQuotes = random

  heartToggle(random.isFavorite)
}

generateBtn.addEventListener('click', () => showRandomQuote(randomQuote()))

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

let quoteQuantity = 0
let removedQuote = false

function createCard() {
  tumbleweed.remove()

  const item = document.createElement('div')
  const favQuoteText = document.createElement('div')
  const favAuthor = document.createElement('div')
  const removeFavBtn = document.createElement('button')

  item.classList.add('item')
  favQuoteText.classList.add('favQuote')
  favAuthor.classList.add('favAuthor')
  removeFavBtn.classList.add('removeBtn')
  removeFavBtn.textContent = `${'🗑️'}`

  return { item, favQuoteText, favAuthor, removeFavBtn }
}

function triggerShake(element) {
  element.classList.add('shake')

  setTimeout(() => {
    element.classList.remove('shake')
  }, 300)
}

function addFavorites(quote) {
  const { item, favQuoteText, favAuthor, removeFavBtn } = createCard()

  if (removedQuote) {
    quote = removedQuote
    randomQuotes = quote
  }

  if (!quote.isFavorite) {
    quote.isFavorite = true
    removedQuote = false

    heartToggle(quote.isFavorite)

    favQuoteText.textContent = `"${quote.text}"`
    favAuthor.textContent = `${quote.author}`

    item.appendChild(favAuthor)
    item.appendChild(favQuoteText)
    item.appendChild(removeFavBtn)

    favsContainer.appendChild(item)

    quoteQuantity += 1

    removeFavBtn.addEventListener('click', () => {
      removingFavoritesCards(quote, item)
    })
  } else {
    favBtn.textContent = 'Already added!'
    triggerShake(wholeFavoriteButton)

    setTimeout(() => {
      favBtn.textContent = 'Add to favorite'
    }, 1000)
  }
}

function removingFavoritesCards(quote, card) {
  quote.isFavorite = false
  card.remove()

  removedQuote = quote

  quotes.textContent = `"${quote.text}"`
  authors.textContent = `${quote.author}`

  heartToggle(quote.isFavorite)

  quoteQuantity -= 1

  if (quoteQuantity == 0) {
    tumbleweed = document.createElement('img')
    tumbleweed.classList.add('tumbleweedGif')
    tumbleweed.src = './tumbleweed.gif'
    favsContainer.appendChild(tumbleweed)
  }
}

favBtn.addEventListener('click', () => {
  addFavorites(randomQuotes)
})
