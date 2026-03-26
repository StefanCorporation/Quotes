const quote = document.getElementById('quote')
const author = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
const favsContainer = document.getElementById('favs')

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    quotes = data
  })

const finalQuotes = []

function randomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)]

  quote.textContent = `"${random.text}"`
  author.textContent = `${random.author}`

  finalQuotes.push(random)

  finalQuotes.splice(0, finalQuotes.length - 1)
}

generateBtn.addEventListener('click', randomQuote)

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// favorites
function addFavorites(quote) {
  const item = document.createElement('div')
  item.classList.add('item')

  const favQuoteText = document.createElement('div')
  const favAuthor = document.createElement('div')

  favQuoteText.classList.add('favQuote')
  favAuthor.classList.add('favAuthor')

  favQuoteText.textContent = `"${quote.text}"`
  favAuthor.textContent = `${quote.author}`

  item.appendChild(favAuthor)
  favAuthor.appendChild(favQuoteText)

  favsContainer.appendChild(item)
}

favBtn.addEventListener('click', () => {
  if (finalQuotes.length > 0) {
    addFavorites(finalQuotes[0])
  }
})
