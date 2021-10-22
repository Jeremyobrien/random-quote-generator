/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * array of quotes
 ***/
const quotes = [
  {
    quote: `All our dreams can come true, if we have the courage to pursue them.`,
    source: `Walt Disney`
  },
  {
    quote: `The secret of getting ahead is getting started.`,
    source: `Mark Twain`
  },
  {
    quote: `I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.`,
    source: `Michael Jordan`
  },
  {
    quote: `Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`,
    source: `Mary Kay Ash`
  },
  {
    quote: `The best time to plant a tree was 20 years ago. The second best time is now.`,
    source: `Chinese Proverb`
  },
  {
    quote: `It's hard to beat a person who never gives up.`,
    source: `Babe Ruth`
  },
  {
    quote: `Always do what you are afraid to do.`,
    source: ` Ralph Waldo Emerson`,
    citation: `Heroism`,
    year: 1841,
  },
  {
    quote: `It’s no use going back to yesterday, because I was a different person then.`,
    source: `Lewis Carroll`
  },
  {
    quote: `Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.`,
    source: `Socrates`
  },
  {
    quote: `Happiness is not something ready made. It comes from your own actions.`,
    source: `Dalai Lama XIV`
  }
];

//generates random color
function getRandomColor () {
  const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomColor(0, 255);
  const g = randomColor(0, 255);
  const b = randomColor(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
};

/***
 * function that returns random quote
***/
function getRandomQuote (quotes) {
  let quoteIndex  = Math.floor(Math.random() * quotes.length);
  let result;
   result = quotes[quoteIndex];
   return result;
};

// // /***
// //  * formats quote according to relevant quote object properties and displays quote
// // ***/
function printQuote () {
  let randomColor = getRandomColor();
  let randomQuote = getRandomQuote(quotes);
  let quoteDisplay = `<p class="quote">${randomQuote.quote}</p>
                      <p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
      quoteDisplay +=`<span class="citation">${randomQuote.citation}</span>`
    }
    if (randomQuote.year) {
      quoteDisplay +=`, <span>${randomQuote.year}</span>`
    } else {
      quoteDisplay += `</p>`;
    }
    document.body.style.backgroundColor = randomColor;
    return document.getElementById('quote-box').innerHTML = quoteDisplay;
};



/***
 * event listener that initiates a new, random quote
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);