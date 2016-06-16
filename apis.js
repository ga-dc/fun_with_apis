$(document).ready(function(){

var keyword = "cities"
var searchNumber = 3
var url = "http://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=dc6zaTOxFJmzC&limit="+searchNumber

$("#get").on("click", function(){
  keyword = $("input#city").val()
  searchNumber = 2
  searchNumber = Number(searchNumber)
  console.log("number: "+searchNumber +" keyword: "+keyword)
  console.log(url)
  ajaxRun()
})

function ajaxRun(){
$.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    })
    .always(function(){
      console.log("API call complete")})

    .done(function(response){
      console.log(response)
      for (i=0; i<searchNumber; i++){
        src = response.data[i].images.original.url
        var imgID = "<img src='"+src+"'>"
        $(".images").append(imgID)
        console.log(imgID)
      }
      console.log("number: "+searchNumber +" keyword: "+keyword)
    })

    .fail(function (){
      console.log("failed")
    })
}
})
