// initial API call
$( document ).ready( function() {
  $( "#search-form button" ).on( 'click', function(){

    // Obtein user inputted search term and location.
    var searchTerm   = $( 'input[name="searchTerm"]' ).val();

    console.log(searchTerm);

    // Build an API query URL.
    var baseUrl = [
      'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      '?api-key=d5d517dae8224de0b5a659a4b5d01ce7'
    ].join('');

    // Build a query url based on user's input.
    var queryUrl = baseUrl + '&q=' + searchTerm;

    searchTerm = "";

    $.ajax({
      url: queryUrl,
      method: 'GET',
    }).done(function(data) {
      console.log(data);

      var articles = data.response.docs;
      var article  = articles[0];

      $( '.lead_paragraph' ).text( article.lead_paragraph );
      $( '.abstract' ).text( article.abstract );
      $( '.pub_date' ).text( article.pub_date );
      $( '.web_url' ).text( article.web_url );

    }).fail(function(err) {
      console.log(err);
      throw err;
    });
  });
});
