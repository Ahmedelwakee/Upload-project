const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Act as if what you do makes a difference. It does."
  ];
  
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("new-quote");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });