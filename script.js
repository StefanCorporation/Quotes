const quote = document.getElementById('quote')
const author = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')
const toggle = document.getElementById('theme-toggle')
const favBtn = document.getElementById('fav-btn')
const favsContainer = document.getElementById('favs')

let quotes = []

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    quotes = data
  })

function randomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)]

  quote.textContent = `"${random.text}"`
  author.textContent = `${random.author}`

  return random
}

generateBtn.addEventListener('click', randomQuote)

//dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// favorites
function addFavorites() {
  const item = document.createElement('div')

  item.classList.add('item')
  item.textContent = randomQuote().text

  favsContainer.appendChild(item)
}

favBtn.addEventListener('click', addFavorites)
