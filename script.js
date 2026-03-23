const quote = document.getElementById('quote')
const author = document.getElementById('author')
const button = document.getElementById('generate-btn')

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
}

button.addEventListener('click', randomQuote)

//dark Mode

const toggle = document.getElementById('theme-toggle')

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
