<?php
if (!session_id()) session_start();
if (!$_SESSION['logon']){ 
    header("Location:index.php");
    die();
}//http://www.mustbebuilt.co.uk/php/insert-update-and-delete-with-pdo/
?>
<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
</head>

<body>
    <form action="signout.php" method="post">
        <input type="submit" value="LOGOUT">
    </form>
	<h1><?php echo "<h1>" . $_SESSION['name'] . "</h1><h2>" . $_SESSION['mail'] . "</h2>";
         ?>
    <form action="breytauppl.php" method="post"><br>
           Nýtt nafn<br>
        <input type="text" name="newname" required><br>
           Lykilorð<br>
        <input type="password" name="pass_ga" required><br>
        <input value="Accept" type="submit">
    </form>
    <div>
</body>
</html>