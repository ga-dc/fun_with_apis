// initial API call
$(document).ready( function() {
  $("button").on("click", function(){
  var searchTerm = $("input").val()
  searchTerm = searchTerm.trim().replace(/\s+/g, '+')
  var searchUrl = ("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=10&q="+searchTerm);
  $.ajax ({
    url:searchUrl,
    type:"GET",
    dataType: "json"
  })
  .done (function(response){
    console.log(response);
    console.log(searchUrl)
    // var imgURL = response[image.original.url]
    // console.log (imgUrl)
    $("div").empty()
    response.data.forEach(function(gif) {
        var url = gif.images.original.url;
        var image = $('<img src=' + url + ' />');
        image.appendTo($('div'));
      });
  })
  .fail (function(response){
    console.log ("Failed "+response);
  })
  .always (function(){
    console.log ("I'm always gonna happen.")
  });
  });
});
