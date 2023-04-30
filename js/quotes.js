const quotes = [
  {
    quote : "People inspire you, or they drain you. Pick them wisely",
    author : "Hans F. Hasen",
  },
  {
    quote : "Don't walk away from negative people -run!!",
    author : "Mark Twain",
  },
  {
    quote : "Pay no attention to toxic words. What people say is often a reflection of themselves, not you.",
    author : "Christian Baloga",
  },
  {
    quote : "Nobody can make you feel inferior without your consent.",
    author : "Eleanor Roosevelt",
  },
  {
    quote : "Let go of negative. they only show up to share complaints, problems, disatrous stories, fear, and judgment on others. If somebody is looking for a bin to throw all their all their trash into, make sure it's not in your mind.",
    author : "Dalai lama",
  },
  {
    quote : "Rudness is the weak man's imitation of strength",
    author : "Eric Hoffer",
  },
  {
    quote : "To follow, without half, one ain: that's the secret of sucess.",
    author : "Anna Pavlove",
  },
  {
    quote : "You may never know what results come of your action, butif you do nothing there will be no result",
    author : "Mahtma Gandhi",
  },
  {
    quote : "The first step toward change is awarensee. The second step is acceptane.",
    author : "Nathaniel Branden",
  },
  {
    quote : "Many peple founder about in life because they do not have a purpose, an objective toward which to work.",
    author : "George Halas",
  },
  {
    quote : "That some achieve greate success, is proof to all that others can achive it as well.",
    author : "Abraham Lincoln",
  },
  {
    quote : "Refuse to be average. Let your heart soar as high as it will.",
    author : "Aiden wilson tozer",
  },
  {
    quote : "A strong positive mental attitude will create more miracles than any wonder drug.",
    author : "Patricia Neal",
  },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `-  ${todayQuote.author}  -`;
