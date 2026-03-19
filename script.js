const element = document.getElementById('quote');
const button = document.getElementById('generate-btn');

let quotes = [];


fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    quotes = data;
  });

function randomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  element.textContent = `"${random.text}" — ${random.author}`;
}

button.addEventListener('click', randomQuote);
