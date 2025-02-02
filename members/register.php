<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - Fitness-area</title>
    <link rel="stylesheet" href="./assets/css/members.css">
</head>
<body>
    <div class="form-container">
        <img src="../img/man-push.jpg" alt="homme qui pousse un poid">
        <form action="register.php" method="post">
            <div class="input-container">
                
                <input type="text" placeholder="Nom" name="lastname">
                <input type="text" placeholder="Prénom" name="name">
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="Mot de passe" name="password">
                <input type="tel" placeholder="Téléphone" name="tel">
                <input type="submit" placeholder="Envoyer">
            </div>
        </form>
    </div>
    
</body>
</html>