// initial API call
$( document ).ready( function() {
  $( "#search-form button" ).on( 'click', function(){

    // Obtein user inputted search term and location.
    var searchTerm   = $( 'input[name="searchTerm"]' ).val();

    // Build an API query URL.
    var baseUrl = [
      'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      '?api-key=d5d517dae8224de0b5a659a4b5d01ce7'
    ].join('');

    // Build a query url based on user's input.
    var queryUrl = baseUrl + '&q=' + searchTerm;

    //
    $.ajax({
      url: queryUrl,
      method: 'GET',
    }).done(function(response) {
      console.log(response);

      var articles = response.docs;


      // $(  '.movie .movie-title'  ).text(  response[ "Title" ]  );
      // $(  '.movie .movie-plot'  ).text(  response[ "Plot" ]  );
      // $(  '.movie .movie-genre'  ).text(  response[ "Genre" ]  );
      // $(  '.movie .movie-year'  ).text(  response[ "Year" ]  );
      // $(  'img'  ).attr( 'src', response[ "Poster" ]  );
    }).fail(function(err) {
      throw err;
    });
  });
});
