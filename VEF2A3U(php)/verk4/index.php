<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Verkefni 4</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    
  <?php 
    require_once($_SERVER['DOCUMENT_ROOT'] . "/2T/1811992029/onn4/vef2a3u/verkefni4/connection.php");
    require($_SERVER['DOCUMENT_ROOT'] . "/2T/1811992029/onn4/vef2a3u/verkefni4/query.php");
 
    foreach($images as $entry): ?>
    <h1><?= $entry[0] ?></h1><img src=<?= $entry[1] ?>>
  <?php endforeach; ?>
    
  </body>
</html>