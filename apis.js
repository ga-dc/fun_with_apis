$(document).ready(function(){

$("#get").on("click", function(){
  var keyword = $("input#city").val()
  var searchNumber = $("input#return").val()
  console.log(searchNumber)
  searchNumber = Number(searchNumber)
  var url = "http://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=dc6zaTOxFJmzC&limit="+searchNumber
  console.log("number: "+searchNumber +" keyword: "+keyword)
  console.log(url)



$.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    })
    .always(function(){
      console.log("API call complete")})

    .done(function(response){
      console.log(response)
      $(".images").html("")
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
  })
})
