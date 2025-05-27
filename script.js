const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Unknown"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote').textContent = `"${quote.text}"`;
  document.getElementById('author').textContent = `— ${quote.author}`;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Initial quote
window.onload = displayQuote;
