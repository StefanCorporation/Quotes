


fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    quotes = data;
    console.log(quotes)
  });

