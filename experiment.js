// Run `node experiment.js`

var baseUrl = [
  'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  '?api-key=d5d517dae8224de0b5a659a4b5d01ce7'
].join('');

// Build a query url based on user's input.
var queryUrl = baseUrl + '&q=' + "sushi";

console.log(queryUrl);
