$(document).ready(function(){
  //calendar datepicker function so input box drops down
  $(function() {
    $( ".datepicker" ).datepicker();
  });

var url = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=dc6zaTOxFJmzC';
$("button").click(function(){
  var search = $('.destination').val();
  $.ajax({
    url: url+search+apiKey,
    type: "GET",
    dataType: "json"
  }).success(function(response){
    console.log(response);
    images = '';
    for (var i=0;i<response.data.length;i++) {
      var images = images + '<img src="' + response.data[i].images.downsized_large.url + '" >';
    }

      $('.output').html(images);
  }).fail(function(response){
    console.log("sucks for you", response);
  });
});


// initial API call to the server
//GET request - This Works!!
/*
var url = "https://tunr-api.herokuapp.com"
  var artistList = $("ul");
  $("button").click(function(){
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).success(function(response){
      debugger;
      console.log(response);
      for(var i=0; i<response.length; i++){
        var artist = artist + "<li>" + response[i].name + "</li>";
      }
      $('.output').html(artist);

    }).fail(function(response){
      console.log("sucks for you", response);
    });
  });
*/


/*    var searchTerm = $(".destination").val();
    var searchUrl = "https://www.googleapis.com/qpxExpress/v1/trips/search" + searchTerm;
    $.ajax({
      url: searchUrl,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("FAIL", response);
    }).then(function(){
      console.log("I'm always gonna happen.");
    })*/
//  });
});
//POST request
/*$("#post").on("click", function(){
    var artistName = $("#artist-name").val();
    var artistPhotoUrl = $("#artist-photo-url").val();
    var artistNationality = $("#artist-nationality").val();

    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      data: {
        artist: {
          name: artistName,
          photo_url: artistPhotoUrl,
          nationality: artistNationality
        }
      }
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("FAIL", response);
    });
  });
*/
