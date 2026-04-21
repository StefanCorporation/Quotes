import data from './quotes.js'
import { generateRnadomInt } from './utils.js'

const quotes = document.getElementById('quote')
const authors = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
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
  const random = data[generateRnadomInt(data.length)]

  quotes.textContent = `"${random.text}"`
  authors.textContent = `${random.author}`

  randomQuotes = random

  heartToggle(random.isFavorite)
}

generateBtn.addEventListener('click', randomQuote)

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

let quoteQuantity = 0
let removedQuote = false

// favorites
function addFavorites(quote) {
  //creating and adding favorite cards
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
    alert('Quote already added!!!')
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
