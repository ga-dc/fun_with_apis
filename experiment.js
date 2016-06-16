// Build an API query URL.
var baseUrl = [
  'https://api.yelp.com/v2/search/?',
  'oauth_consumer_key=H45qz56oPBX5mgXNcZHOCQ',
  '&oauth_token=fTImNGc38iHsUYPUoSvvAr1TQpRhlkw5',
  '&oauth_signature_method=hmac-sha1',
  '&oauth_signature=66e9c2a00ebfed217f2af1c6be3290a71101095d'
].join('')
+ '&oauth_timestamp=' + unixTimestamp()
+ '&oauth_nonce=' + randomNumericString();

// Build a query url based on user's input.
var queryUrl = baseUrl + '&term=sushi&location=Washington&limit=5&category_filter=asianfusion';

/**
 * Utility function to make a random numeric string.
 * @return {String} random numeric string
 */
function randomNumericString() {
  return Math.random().toString(36).substr(2); // remove `0.`
}

/**
 * http://stackoverflow.com/a/221297/3837223
 * @return {String} Unix timestamp
 */
function unixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

console.log(queryUrl);
