<?php
    $lysing2 = $_POST['heiti'];
    $mynd2 = $_POST['slod'];
    //get from file
    $jso = file_get_contents('jmyndir.json');
    //dceode object from file
    $obj = json_decode($jso);
    //display error
    if (!$obj) trigger_error('JSON FAIL: ' .  json_last_error(), E_USER_ERROR);

    // CREATE SOME NEW DATA TO APPEND TO THE komp ARRAY
    $new = new StdClass;
    $new->title = $lysing2;
    $new->img = $mynd2;

    // INJECT SOME DATA INTO THE OBJECT
    $obj->myndirArray[] = $new;


    // RENDER THE NEW JSON STRING
    //encode back to json for storage
    $final_obj = json_encode($obj);
    file_put_contents('jmyndir.json', $final_obj);
    header('Location:http://138.68.140.132/verk6-1/birtamyndir.php');
?>