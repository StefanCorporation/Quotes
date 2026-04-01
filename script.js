const quote = document.getElementById('quote')
const author = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
const favsContainer = document.getElementById('favs')
const heart = document.getElementById('heart')

import data from './quotes.js'

let randomQuotes
let quoteIndex

function randomQuote() {
  const randomIndex = Math.floor(Math.random() * data.length)
  const random = data[randomIndex]

  quote.textContent = `"${random.text}"`
  author.textContent = `${random.author}`

  randomQuotes = random
  quoteIndex = randomIndex

  heart.textContent = `${'🖤'}`
  favBtn.textContent = 'Add to favorite'
}

generateBtn.addEventListener('click', randomQuote)

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// favorites
function addFavorites(quote) {
  //creating and adding favorite cards

  const item = document.createElement('div')
  item.classList.add('item')

  const favQuoteText = document.createElement('div')
  const favAuthor = document.createElement('div')

  favQuoteText.classList.add('favQuote')
  favAuthor.classList.add('favAuthor')

  const currentQuote = data[quoteIndex]
  if (!currentQuote.isFavorite) {
    currentQuote.isFavorite = true

    heart.textContent = `${'❤️'}`
    favBtn.textContent = 'Added to favorite'

    favQuoteText.textContent = `${quote.text}`
    favAuthor.textContent = `${quote.author}`

    item.appendChild(favAuthor)
    favAuthor.appendChild(favQuoteText)

    favsContainer.appendChild(item)
  }
}

favBtn.addEventListener('click', () => {
  addFavorites(randomQuotes)
})
