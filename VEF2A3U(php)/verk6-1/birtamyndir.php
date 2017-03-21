<!DOCTYPE html>
<html>
<head>
	<title>Verkefni 6</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="verkefni6.css">
    <link rel="stylesheet" href="normalize.css">
</head>
<body>
    <header>
    </header>
    <h1>Bæta við Json mynd:</h1>
    <hr>
    <br>
    <form action="baeta.php" method="post">
        <fieldset>
            <p>JSON</p>
            Myndaheiti <input type="text" name="heiti" required><br>
            Slóð á mynd <input type="text" name="slod" required><br>
            <input type="submit">
        </fieldset>
    </form>
<h1>Förum núna yfir í Json:</h1>
    <hr>
    <br>
<?php 
    $string_json = file_get_contents('jmyndir.json');
    $json_myndir = json_decode($string_json, true);
    //print_r($json_myndir['myndirArray'][1]['img'])
    for ($x = 0; $x <= count($json_myndir['myndirArray'])-1; $x++) {
        echo "<h1>{$json_myndir['myndirArray'][$x]['title']}</h1>";
        echo "<img src={$json_myndir['myndirArray'][$x]['img']}>";
        echo "<br>";
    }
    echo "<br>";
    echo "<hr>";
?>