import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",

  "Believe you can and you’re halfway there.",
  "Difficult roads often lead to beautiful destinations.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Small steps every day lead to big results.",
  "Opportunities don’t happen, you create them.",
  "Work hard in silence, let success make the noise.",
  "Failure is not the opposite of success, it’s part of success.",
  "Do something today that your future self will thank you for.",
  "Act as if what you do makes a difference. It does.",
  "Hustle beats talent when talent doesn’t hustle."
];
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 text-white">
      <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white rounded-md p-4"> Random Quote Generator</h1>
      <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">"{quote || "Click the button to generate a quote!"}"</p>
      <br />
      <br />
      <button
        onClick={generateQuote}
        className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-red-600 transition"
      >
        Generate Quote
      </button>
    </div>
  );
}

export default App;
