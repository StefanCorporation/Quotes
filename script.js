import data from './quotes.js'

const quote = document.getElementById('quote')
const author = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
const favsContainer = document.getElementById('favs')
const heart = document.getElementById('heart')
let tumbleweed = document.getElementById('tumbleweed')

let randomQuotes
let quoteIndex

function randomQuote() {
  const randomIndex = Math.floor(Math.random() * data.length)
  const random = data[randomIndex]

  quote.textContent = `"${random.text}"`
  author.textContent = `${random.author}`

  randomQuotes = random
  quoteIndex = randomIndex

  if (random.isFavorite) {
    heart.textContent = `${'❤️'}`
    favBtn.textContent = 'Added to favorite'
  } else {
    heart.textContent = `${'🖤'}`
    favBtn.textContent = 'Add to favorite'
  }
}

generateBtn.addEventListener('click', randomQuote)

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

let quoteQuantity = 0

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

  const currentQuote = data[quoteIndex]
  if (!currentQuote.isFavorite) {
    currentQuote.isFavorite = true

    heart.textContent = `${'❤️'}`
    favBtn.textContent = 'Added to favorite'

    favQuoteText.textContent = `"${quote.text}"`
    favAuthor.textContent = `${quote.author}`

    item.appendChild(favAuthor)
    item.appendChild(favQuoteText)
    item.appendChild(removeFavBtn)

    favsContainer.appendChild(item)

    quoteQuantity += 1

    // removing favs
    removeFavBtn.addEventListener('click', () => {
      currentQuote.isFavorite = false
      item.remove()

      heart.textContent = `${'🖤'}`
      favBtn.textContent = 'Add to favorite'

      quoteQuantity -= 1

      if (quoteQuantity == 0) {
        tumbleweed = document.createElement('img')
        tumbleweed.classList.add('tumbleweedGif')
        tumbleweed.src = './tumbleweed.gif'
        favsContainer.appendChild(tumbleweed)
      }
    })
  } else {
    alert('Quote already added!!!')
  }
}

favBtn.addEventListener('click', () => {
  addFavorites(randomQuotes)
})
