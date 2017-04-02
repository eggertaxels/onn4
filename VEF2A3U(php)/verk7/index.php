<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verkefni7</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="signin.php" method="post">
      <h3>Sign In</h3>
          Email
           <input type="email" name="email" required><br>
           Password
           <input type="password" name="password" required>
           <input id="takki" type="submit">
    </form>
    <form action="signup.php" method="post">
      <h3>Sign Up</h3>
          Mail
           <input type="email" name="mail" required><br>
          Nafn
           <input type="text" name="name" required><br>
          Password
           <input type="password" name="pass" required>
           <input id="takki" type="submit">
    </form>
</body>
</html>