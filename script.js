// Get value from search input field.
var keyword = $("input[name='keyword']").val();
var url = "https://www.googleapis.com/youtube/v3/search"+keyword
$.ajax({
  url: url,
  type: "GET",
  dataType: "json"
})
