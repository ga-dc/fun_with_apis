<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="main.css">
  </head>
<body>
  <h2>Find Items by Store Name</h2>
  <!-- <input name="find" placeholder="Search by Ebay Store" action="index.php" method="POST">
  <button type="sumbit" name="button"></button> -->
  <div id="item">
    <?php


        $findAPI = 'http://svcs.ebay.com/services/search/FindingService/v1';
        $appid = 'Key';
        $responseEncoding = 'XML';
        $f_version = '1.4.0';
        $call = "findItemsIneBayStores";
        $global = 'EBAY-US';
        $returneditems = '20';
        $storeName = "rapidsd1985";

        $calls = "$findAPI?OPERATION-NAME=$call"
            ."&version=$f_version"
            . "&GLOBAL-ID=$global"
            . "&SECURITY-APPNAME=$appid"
            . "&RESPONSE-DATA-FORMAT=$responseEncoding"
            . "&paginationInput.entriesPerPage=$returneditems"
            . "&storeName=$storeName";
        $request = simplexml_load_file($calls);


    foreach($request->searchResult->item as $details){
    $itemId = $details -> itemId;
    $title = $details -> title;
    $galleryURL= $details -> galleryURL;
    $viewItemURL = $details -> viewItemURL;
    $zipCode= $details-> postalCode;
    $location = $details-> location;
    $condition = $details-> condition->conditionDisplayName;
    $price = $details-> sellingStatus->currentPrice;
    $timeLeft = $details-> sellingStatus-> timeLeft;
    $endTime = $details-> listingInfo->endTime;
    echo "<div class='main'>
            <ul class='content'>
                 <li class='imgs'><a href ='$viewItemURL'><img src = '$galleryURL' class='img' alt='$title' ></a></li>
                <li class='title'>Title: $title</li>
                <li class='price'>Price: &#36  $price</li>
            </ul>
        </div> ";



/**echo '<pre>';
print_r($request);
*/
}
?>
</div>
</body>
</html>
