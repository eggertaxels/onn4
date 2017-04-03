<?php
  if (isset($_POST['newname']) && isset($_POST['pass_ga'])) {
          include "connect.php";
              session_start();
      $new = $_POST['newname'];
      $pass = $_POST['pass_ga'];
    try {
        $sql = "UPDATE users
                SET name = :newname
                WHERE pass = :pass;";
        $query = $pdo->prepare($sql);
        $query->execute( array( ':newname'=>$new, ':pass'=>$pass ) );
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (Exception $e) {
		echo "Ekki tókst að skrá gögnin". "<br>" . $e->getMessage();
	}
  }
          header("Refresh: 2; URL=../verk7/");
?>
<h1>Þú ert færður yfir á heimasíðu svo gögn uppfærist.</h1>