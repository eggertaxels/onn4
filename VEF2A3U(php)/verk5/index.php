<?php
try{

	# Hér þarf að breyta dbname, notendanafni og lykilorði
	$source = 'mysql:host=127.0.0.1;dbname=myndir';
	$user = 'root';
	$password = '12345678';

	# tegund og nafn á server, nafn á db og aðgangur
	$pdo = new PDO($source, $user, $password);

	# stillum hann af hvernig hann með höndlar villur
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	# Við getum notað exec fyrir INSERT; UPDATE og DELETE
	#  notum utf-8 og gerum það með SQL fyrirspurn exec sendir sql fyrirspurnir til database
	$pdo->exec('SET NAMES "utf8"');

}
catch (PDOException $e){
	
	#skemmtilegri skilaboð til notanda sjá kóða t.d. bls. 99
	echo "tenging tókst ekki". "<br>" . $e->getMessage();
	
}
?>


<?php 
	try {
		$sql = "select imagePath, imageText, usersID, imageName FROM images";
		// PDO->query(); er notað fyrir SELECT statements ONLY, skilar object af PDOStatement class
		$result = $pdo ->query($sql);
		
	} catch (Exception $e) {
		echo "Ekki tókst að ná í gögnin". "<br>" . $e->getMessage();
	}
	// fetch() sækir eina röð í einu frá database.
	while($row = $result -> fetch()){
		$mynd[] = array($row['imagePath'], $row['imageName'], $row['usersID']);
	}
 ?>
 <?php 
	try {
		$sql = "select ID, Name, Email FROM users";
		// PDO->query(); er notað fyrir SELECT statements ONLY, skilar object af PDOStatement class
		$result = $pdo ->query($sql);
		
	} catch (Exception $e) {
		echo "Ekki tókst að ná í gögnin". "<br>" . $e->getMessage();
	}
	// fetch() sækir eina röð í einu frá database.
	while($row = $result -> fetch()){
		$eigandi[] = array($row['ID'], $row['Name'], $row['Email']);
	}
 ?>
  <?php 
	try {
		$sql = "SELECT COUNT(imageName) AS fjoldi FROM images";
		// PDO->query(); er notað fyrir SELECT statements ONLY, skilar object af PDOStatement class
		$result = $pdo ->query($sql);
		
	} catch (Exception $e) {
		echo "Ekki tókst að ná í gögnin". "<br>" . $e->getMessage();
	}
	// fetch() sækir eina röð í einu frá database.
	while($row = $result -> fetch()){
		$fjoldiMynda = $row['fjoldi'];
	}
 ?>
 

<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8">
        <title>Titill vefsíðu</title>
        <style>
            div{
                height: 300px;
                width: 500px;
                border: 2px solid black;
                border-radius: 25px;
                text-align: center;
            }
            h3{
                text-align: center;
            }
        </style>
</head>
<body>
	<?php
    //SELECT myndir.texti, nafn FROM `users` JOIN myndir ON users.id = myndir.idEigandi WHERE myndir.idEigandi = 2;
		foreach ($mynd as $entry) {
			echo "<div><h3>" . $entry[1] . "</h3><img style='height: 200px; width: auto;' src='" . $entry[0] . "'></a></div>";
		}
	 ?>
	 <div><h3>Fjoldi</h3><h4><?php echo $fjoldiMynda; ?></h4></div>
</body>
</html>