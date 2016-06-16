'use strict';

(function(){

  /**
   * Handle form submission and initiate an API call via ajax.
   */
  $( document ).ready( function() {

    // If the ENTER key was clicked on the form,
    // trigger the click on the search button.
    $( "#search-form" ).on( 'keypress', function( event ){

      if ( event && event.keyCode === 13 ) {
        $( "#search-form button" ).trigger( "click" );
        return false; // NOTE: Stop the event.
      }
    });

    $( "#search-form button" ).on( 'click', function(){

      // Obtein user inputted search term and location.
      var searchTerm   = $( 'input[name="searchTerm"]' ).val();

      console.log( "searchTerm: %s", searchTerm );

      // Build an API query URL.
      var baseUrl = [
        'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        '?api-key=d5d517dae8224de0b5a659a4b5d01ce7'
      ].join('');

      // Build a query url based on user's input.
      var queryUrl = baseUrl + '&q=' + searchTerm + '&sort=newest';

      searchTerm = "";

      $.ajax({
        url: queryUrl,
        method: 'GET',
      }).done( function( data ) {
        console.log( data );

        var articles = data.response.docs;
        dataToHtml( articles )

      }).fail( function( err ) {
        console.log( err );
        throw err;
      });
    });
  });

  /**
   * Render HTML based on the specified data and the template defined above.
   * @param  {Array<Object>} articles
   */
  function dataToHtml( articles ) {
    // Get reference to the Characters template source.
    var source = document.querySelector( '#articles-template' ).innerHTML;

    // Compile the template.
    var template = Handlebars.compile( source );

    // Pass the articles data into the template as articles.
    var output = template({ articles: articles });

    // Insert the template into the target element.
    document.querySelector( '.articles' ).innerHTML = output;
  }
})();
