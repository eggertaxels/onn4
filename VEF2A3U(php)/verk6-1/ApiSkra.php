<?php
  
  // slóð á API, sem skilar JSON
  $url ="http://apis.is/petrol";          
  
  // JSON sótt úr API.
  $json = file_get_contents($url);
  
  // fáum út með print_r($json);
  /*
      {
        "results": [
          {
            "bensin95": 201.4,
            "bensin95_discount": 198.4,
            "company": "Atlantsolía",
            "diesel": 183.9,
            "diesel_discount": 180.9,
            "geo": {
              "lat": 65.69913,
              "lon": -18.135231
            },
            "key": "ao_000",
            "name": "Baldursnes Akureyri"
          },
          {
            "bensin95": 202.7,
            "bensin95_discount": null,
            "company": "Skeljungur",
            "diesel": 186.3,
            "diesel_discount": null,
            "geo": {
              "lat": 63.995624,
              "lon": -21.185094
            },
            "key": "sk_008",
            "name": "Hveragerði"
          }
        ]
      }
  */

  // fáum php object 
  $json_object = json_decode($json);
  
  // Skoðum hvað við höfum
  //echo "<pre>";
  //print_r($json_object);
  //echo "</pre>";
?>

<!DOCTYPE html>
<html>
<head>
	<title>JSON sýnidæmi</title>
</head>
<body>

<!-- tafla með gengisupplýsingum -->
<table>
     <tr>
        <th>Fyrirtæki</th>
        <th>Bensín</th>
         <th>Bensín Afsláttur</th>
        <th>Diesel</th>
         <th>Diesel Afsláttur</th>
        <th>Staðsetning</th>
  
      </tr>
      <?php
          // vinnum með gögnin úr objectinu $json_object

           // $jsonArray->results er vísun í property, results 
           // results er fylki sem geymir objects.  
           // -> er notað til að vísa í property og aðferðir í object.
           foreach ($json_object->results as $value) {

            echo "<tr><td>", $value->company, "</td>","<td>", $value->bensin95, "</td>";
               echo "<td>", $value->bensin95_discount, "</td>","<td>", $value->diesel, "</td>";
               echo "<td>", $value->diesel_discount, "</td>","<td>", $value->name, "</td></tr>";
          }           
      ?>
</table>
</body>
</html>