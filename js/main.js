// initial API call
$( document ).ready( function() {
  $( "#search-form button" ).on( 'click', function(){

    // console.log("clicked");

    // Obtein user inputted search term and location.
    var searchTerm   = $( 'input[name="searchTerm"]' ).val();
    var locationTerm = $( 'input[name="locationTerm"]' ).val();

    // console.log( 'searchTerm: ', searchTerm );
    // console.log( 'locationTerm: ', locationTerm );

    /*
    oauth_consumer_key=H45qz56oPBX5mgXNcZHOCQ
    &oauth_token=fTImNGc38iHsUYPUoSvvAr1TQpRhlkw5
    &oauth_signature_method=hmac-sha1
    &oauth_signature=75LI72t4hm1HhO9offhdPYMmEls
    &oauth_timestamp=1466085306
    &oauth_nonce
     */

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

    $.ajax( {
      url: queryUrl,
      type: 'GET',
      dataType: 'json'
    } )
    .done(  function( response ) {
      console.log( response );
      // $(  '.movie .movie-title'  ).text(  response[ "Title" ]  );
      // $(  '.movie .movie-plot'  ).text(  response[ "Plot" ]  );
      // $(  '.movie .movie-genre'  ).text(  response[ "Genre" ]  );
      // $(  '.movie .movie-year'  ).text(  response[ "Year" ]  );
      // $(  'img'  ).attr( 'src', response[ "Poster" ]  );
    } )
    .fail(  function( response ) {
      console.log( response);
    })
  });
});

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
