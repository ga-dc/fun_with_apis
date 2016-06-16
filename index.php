<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>

<?php
error_reporting(E_ALL);  // Turn on all errors, warnings and notices for easier debugging

// API request variables
$endpoint = 'http://svcs.ebay.com/services/search/FindingService/v1';  // URL to call
$version = '1.0.0';  // API version supported by your application
$appid = 'TGreen-Eamabay-PRD-a8a129233-77462b05';  // Replace with your own AppID
$globalid = 'EBAY-US';  // Global ID of the eBay site you want to search (e.g., EBAY-DE)
$query = 'Mario';  // You may want to supply your own query
$safequery = urlencode($query);  // Make the query URL-friendly
// Construct the findItemsByKeywords HTTP GET call
$apicall = "$endpoint?";
$apicall .= "OPERATION-NAME=findItemsByKeywords";
$apicall .= "&SERVICE-VERSION=$version";
$apicall .= "&SECURITY-APPNAME=$appid";
$apicall .= "&GLOBAL-ID=$globalid";
$apicall .= "&RESPONSE-DATA-FORMAT=JSON";
$apicall .= "&keywords=$safequery";
$apicall .= "&paginationInput.entriesPerPage=5";


$respons = file_get_contents($apicall);
$resp = json_decode($response);
#var_dump($data->findItemsByKeywordsResponse[0]->searchResult);
foreach($resp->searchResult->item as $item) {
   $pic   = $item->galleryURL;
   $link  = $item->viewItemURL;
   $title = $item->title;

   // For each SearchResultItem node, build a link and append it to $results
   $results .= "<tr><td><img src=\"$pic\"></td><td><a href=\"$link\">$title</a></td></tr>";
 }
}


#echo '<pre>';
  //$title = $asset -> item;
  //$itemUrl = $asset -> viewItemURL;
    // echo "<div class ='item'>
    //       <p><a href='$itemURL'>$title</a></p>
    // ";
  #  print_r($response);
    #print_r($asset -> item[1] -> sellingStatus[0] -> currentPrice[0] -> __value__);
 }
// echo "<pre>";
//  print_r( );

?>
<body>

</body>
</html>
